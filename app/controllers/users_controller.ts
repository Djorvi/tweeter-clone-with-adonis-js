import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { RegisterUserValidator, LoginUserValidator } from '#validators/auth'
import hash from '@adonisjs/core/services/hash'
import type { GuardsList } from '@adonisjs/core/http'

type WebGuard = GuardsList['web']

export default class usersController {
  /**
   * Affiche la page de connexion
   */
  public async showLoginPage({ view }: HttpContext) {
    return view.render('pages/login')
  }

  
  /**
   * Gère la connexion utilisateur
   */
  public async login({ request, response, auth, session }: HttpContext) {
    const { email, password } = await request.validateUsing(LoginUserValidator)

    try {
      // Solution avec typage explicite
      const authInstance = auth.use<GuardsList>('web')
      await authInstance.attempt(email, password)
      
      session.flash('success', 'Connexion réussie')
      return response.redirect('p/home')
    } catch (error) {
      session.flash('error', 'Email ou mot de passe incorrect')
      return response.redirect().back()
    }
  }

  /**
   * Affiche la page d'inscription
   */
  public async showRegisterPage({ view }: HttpContext) {
    return view.render('pages/register')
  }

  /**
   * Gère l'inscription utilisateur
   */
  public async register({ request, response, auth, session }: HttpContext) {
    const payload = await request.validateUsing(RegisterUserValidator)

    try {
      const user = await User.create({
        ...payload,
        password: await hash.make(payload.password)
      })

      // Typage explicite pour login
      const authInstance = auth.use<GuardsList>('web')
      await authInstance.login(user)
      
      session.flash('success', 'Inscription réussie !')
      return response.redirect('/home')
    } catch (error) {
      session.flash('error', 'Une erreur est survenue lors de l\'inscription')
      return response.redirect().back()
    }
  }

  /**
   * Gère la déconnexion
   */
  public async logout({ auth, response }: HttpContext) {
    // Typage explicite pour logout
    const authInstance = auth.use<WebGuard>('web')
    await authInstance.logout()
    return response.redirect('/')
  }
}


