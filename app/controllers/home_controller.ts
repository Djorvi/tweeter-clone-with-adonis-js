// import type { HttpContext } from '@adonisjs/core/http'

// app/Controllers/HomeController.ts

import type { HttpContext } from '@adonisjs/core/http'

interface Tweet {
  id: number
  username: string
  handle: string
  avatar: string
  content: string
  likes: number
  retweets: number
  comments: number
}

export default class HomeController {
  public async index({ view }: HttpContext) {
    const tweets: Tweet[] = [
      {
        id: 1,
        username: 'user1',
        handle: '@user1',
        avatar: 'https://via.placeholder.com/50',
        content: 'Ceci est un tweet statique.',
        likes: 10,
        retweets: 2,
        comments: 3,
      },
      {
        id: 2,
        username: 'user2',
        handle: '@user2',
        avatar: 'https://via.placeholder.com/50',
        content: 'Un autre tweet statique.',
        likes: 5,
        retweets: 1,
        comments: 0,
      },
    ]
    return view.render('pages/home', { tweets })
  }
}
