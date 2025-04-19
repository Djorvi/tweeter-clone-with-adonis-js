import { HttpContext } from '@adonisjs/core/http'

export default class AuthMiddleware {
  async handle(ctx: HttpContext, next: () => Promise<void>) {
    try {
      await ctx.auth.authenticate()
      await next()
    } catch {
      return ctx.response.redirect('/login')
    }
  }
}

