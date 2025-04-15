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
    const validatedData = await LoginUserValidator.validate(userData)
    try {
      
      const validateInputData = await User.verifyCredentials(
        validatedData.email,validatedData.password)
      await auth.use('web').login(validateInputData)
      session.flash('success', 'Connexion réussie')
      return response.redirect('/home')
    
    } catch (error) {
      session.flash('error', 'Erreur lors de la connexion')
      console.log('ERROR :',error)
      return response.redirect().back()
    }
  }
  
  
    public async logout({ auth, response }: HttpContext) {
     
      await auth.use('web').logout();
    
      return response.redirect('/');
      
    }



      public async index({ view }: HttpContext) {
        // const currentUser 
    
        return view.render('pages/connexion', {  })
      }
    }




  











