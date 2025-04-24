export default class ProfileController {
    async show({ params, view }) {
        const user = {
            username: params.username,
            handle: `@${params.username}`,
            avatar: 'https://via.placeholder.com/100',
            bio: 'Bio de l\'utilisateur.',
            tweets: [
                {
                    id: 1,
                    content: 'Ceci est un tweet de l\'utilisateur.',
                    likes: 5,
                    retweets: 1,
                    comments: 2,
                },
                {
                    id: 2,
                    content: 'Un autre tweet de l\'utilisateur.',
                    likes: 3,
                    retweets: 0,
                    comments: 1,
                },
            ],
        };
        return view.render('pages/profile', { user });
    }
}
//# sourceMappingURL=profiles_controller.js.map