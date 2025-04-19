// app/Controllers/Http/tweets_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import Tweet from '#models/tweet'

export default class TweetsController {
  public async store({ request, auth, response, session }: HttpContext) {
    try {
      const content = request.input('content')
      await Tweet.create({
        content,
        userId: auth.user!.id,
      })
      session.flash('success', 'Tweet publié avec succès.')
      return response.redirect('/home')
    } catch (error) {
      session.flash('error', 'Erreur lors de la publication.')
      return response.redirect().back()
    }
  }
}