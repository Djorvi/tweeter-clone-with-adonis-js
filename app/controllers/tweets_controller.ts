import { HttpContext } from '@adonisjs/core/http'
import Tweet from '#models/tweet'

export default class TweetsController {
  /**
   * Affiche la liste des tweets (vue HTML)
   */
  async index({ view }: HttpContext) {
    const tweets = await Tweet.query()
      .preload('user')
      .orderBy('created_at', 'desc')
    return view.render('tweets/index', { tweets })
  }

  /**
   * Crée un nouveau tweet (formulaire HTML)
   */
  async store({ auth, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const content = request.input('content')

    await Tweet.create({
      userId: user.id,
      content
    })

    return response.redirect().back()
  }

  /**
   * Liste des tweets (API JSON)
   */
  async apiIndex({ response }: HttpContext) {
    const tweets = await Tweet.query()
      .preload('user')
      .orderBy('created_at', 'desc')
    return response.json(tweets)
  }

  /**
   * Crée un tweet (API JSON)
   */
  async apiStore({ auth, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const content = request.input('content')

    const tweet = await Tweet.create({
      userId: user.id,
      content
    })

    return response.json(tweet)
  }
}