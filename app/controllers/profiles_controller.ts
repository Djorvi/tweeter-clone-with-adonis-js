// import type { HttpContext } from '@adonisjs/core/http'
// app/Controllers/ProfileController.ts


import type { HttpContext } from '@adonisjs/core/http'

interface User {
  username: string
  handle: string
  avatar: string
  bio: string
  tweets: Tweet[]
}

interface Tweet {
  id: number
  content: string
  likes: number
  retweets: number
  comments: number
}

export default class ProfileController {
  public async show({ params, view }: HttpContext) {
    const user: User = {
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
    }
    return view.render('pages/profile', { user })
  }
}