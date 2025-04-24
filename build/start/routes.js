import router from '@adonisjs/core/services/router';
import { middleware } from '#start/kernel';
const HomeController = () => import('#controllers/home_controller');
const ProfileController = () => import('#controllers/profiles_controller');
const UsersController = () => import('#controllers/users_controller');
router.get('/', [UsersController, 'showLoginPage']);
router.get('/login', [UsersController, 'showLoginPage']);
router.post('/login', [UsersController, 'login']);
router.get('/register', [UsersController, 'showRegisterPage']).as('registerPage');
router.post('/register', [UsersController, 'register']);
router.post('/logout', [UsersController, 'logout']).as('logout');
router.get('/connexion', [UsersController, 'index2']);
router.get('/profile', [ProfileController, 'show']);
router.get('/accueil', [UsersController, 'home2']);
router
    .group(() => {
    router.get('/home', [HomeController, 'index']).as('home');
    router.post('/tweets', [HomeController, 'store']);
})
    .use(middleware.auth());
//# sourceMappingURL=routes.js.map