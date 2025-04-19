import type { HttpContext } from '@adonisjs/core/http'
import Tweet from '#models/tweet'

export default class HomeController {
  async index({ view }: HttpContext) {
    const tweets = await Tweet.query().preload('user').orderBy('created_at', 'desc')
    return view.render('pages/home', { tweets })
  }

  async store({ request, response, auth }: HttpContext) {
    const user = auth.user!

    await user.related('tweets').create({
      content: request.input('content')
    })

    return response.redirect().toRoute('home')
  }
}
