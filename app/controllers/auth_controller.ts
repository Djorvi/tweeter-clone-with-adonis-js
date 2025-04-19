import User from '#models/user'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  async register({ request, auth, response }: HttpContext) {
    const data = await request.validateUsing(RegisterValidator)
    const user = await User.create(data)
    await auth.login(user)
    return response.redirect('/home')
  }
}Z