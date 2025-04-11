/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const HomeController = () => import('#controllers/home_controller')
const ProfileController = () => import('#controllers/profiles_controller')
const UsersController = () => import('#controllers/users_controller')


import router from '@adonisjs/core/services/router'

// Routes protégées avec middleware auth 
router.get('/',[HomeController, 'index'])
router.get('/profile', [ProfileController,'show'])




import { middleware } from '#start/kernel'

// Routes publiques
router.get(':/', [UsersController, 'showLoginPage']).as('loginPage')
router.post('/login', [UsersController, 'login']).as('login')
router.get('/register', [UsersController, 'showRegisterPage']).as('registerPage')
router.post('/register', [UsersController, 'register']).as('register')
router.post('/logout', [UsersController, 'logout']).as('logout')

// Routes protégées
router
  .group(() => {
    router.get('/home', [HomeController, 'index']).as('home')
    // ... autres routes protégées
  })
  .use(middleware.auth())












