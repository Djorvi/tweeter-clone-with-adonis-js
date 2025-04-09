/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const HomeController = () => import('#controllers/home_controller')



router.get('/',[HomeController, 'index'])

const ProfileController = () => import('#controllers/profiles_controller')
router.get('/profile', [ProfileController,'show'])


/* je créer le chemin vers une page de login  */

const SimpleController  = () => import('#controllers/auth_controller')
router.get('/login', [SimpleController,'login'])


















