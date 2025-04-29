import User from '#models/user';
import { RegisterUserValidator, LoginUserValidator } from '#validators/auth';
export default class UsersController {
    async showRegisterPage({ view }) {
        return view.render('pages/register');
    }
    async register({ request, response, auth, session }) {
        const userData = request.only([
            'fullName',
            'email',
            'password'
        ]);
        try {
            await RegisterUserValidator.validate(userData);
            const user = await User.create(userData);
            await auth.use('web').login(user);
            session.flash('success', 'Compte créé avec succès');
            return response.redirect('/home');
        }
        catch (error) {
            session.flash('error', 'Erreur lors de la création du compte');
            console.log('ERROR :', error);
            return response.redirect().back();
        }
    }
    async showLoginPage({ view }) {
        console.log("Login page");
        return view.render('pages/loginPage');
    }
    async login({ request, response, auth, session }) {
        const userData = request.all();
        const validatedData = await LoginUserValidator.validate(userData);
        try {
            const user = await User.query().where('email', validatedData.email).firstOrFail();
            const isPasswordValid = await user.verifyPassword(validatedData.password);
            if (isPasswordValid) {
                await auth.use('web').login(user);
                session.flash('success', 'Connexion réussie');
                return response.redirect('/home');
            }
            else {
                session.flash('error', 'Identifiants incorrects');
                return response.redirect().back();
            }
        }
        catch (error) {
            session.flash('error', 'Erreur lors de la connexion');
            console.log('ERROR :', error);
            return response.redirect().back();
        }
    }
    async logout({ auth, response }) {
        await auth.use('web').logout();
        return response.redirect('/');
    }
    async index2({ view }) {
        return view.render('pages/connexion');
    }
    async home2({ view }) {
        return view.render('pages/home');
    }
    async terms({ view }) {
        return view.render('pages/legal/terms');
    }
    async privacy({ view }) {
        return view.render('pages/legal/privacy');
    }
    async cookies({ view }) {
        return view.render('pages/legal/cookies');
    }
}
//# sourceMappingURL=users_controller.js.map