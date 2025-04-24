import Tweet from '#models/tweet';
export default class HomeController {
    async index({ view }) {
        const tweets = await Tweet.query().preload('user').orderBy('created_at', 'desc');
        return view.render('pages/home', { tweets });
    }
    async store({ request, response, auth }) {
        const user = auth.user;
        await user.related('tweets').create({
            content: request.input('content')
        });
        return response.redirect().toRoute('home');
    }
}
//# sourceMappingURL=home_controller.js.map