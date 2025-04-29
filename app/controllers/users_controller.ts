
import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { RegisterUserValidator, LoginUserValidator } from '#validators/auth'



export default class UsersController {


  public async showRegisterPage({ view }: HttpContext) {
    return view.render('pages/register') 
  }


  public async register({ request, response, auth, session }: HttpContext) {
   
    const userData = request.only([
      'fullName',
      'email',
      'password'
    ]) 
    
    try {
     
     await RegisterUserValidator.validate(userData); 

      const user = await User.create(userData)
      await auth.use('web').login(user)

      session.flash('success', 'Compte créé avec succès')

      return response.redirect('/home')
    } catch (error) {
      session.flash('error', 'Erreur lors de la création du compte')
      console.log('ERROR :',error)
      return response.redirect().back()
    } 
  }
  
  public async showLoginPage({ view }: HttpContext) {

    return view.render('pages/loginPage') }


    public async login({ request, response, auth, session }: HttpContext) {
      const userData = request.all()
    
      // Validation des données d'entrée
      const validatedData = await LoginUserValidator.validate(userData)
      
      try {
        // Chercher l'utilisateur par email
        const user = await User.query().where('email', validatedData.email).firstOrFail()
    
        // Vérifier le mot de passe
        const isPasswordValid = await user.verifyPassword(validatedData.password)
    
        if (isPasswordValid) {
          // Se connecter
          await auth.use('web').login(user)
          session.flash('success', 'Connexion réussie')
          return response.redirect('/home')
        } else {
          // Si le mot de passe est incorrect
          session.flash('error', 'Identifiants incorrects')
          return response.redirect().back()
        }
        
      } catch (error) {
        // Si l'utilisateur n'existe pas ou une autre erreur
        session.flash('error', 'Erreur lors de la connexion')
        console.log('ERROR :', error)
        return response.redirect().back()
      }
    }
    
  
  
    public async logout({ auth, response }: HttpContext) {
     
      await auth.use('web').logout();
    
      return response.redirect('/');
      
    }



      public async index2({ view }: HttpContext) {
      
        return view.render('pages/connexion',)
      }

      
      public async home2({ view }: HttpContext) {
      
        return view.render('pages/home',)
      }

      
  async terms({ view }: HttpContext) {
    return view.render('pages/legal/terms')
  }

  async privacy({ view }: HttpContext) {
    return view.render('pages/legal/privacy')
  }

  async cookies({ view }: HttpContext) {
    return view.render('pages/legal/cookies')
  }
    }



