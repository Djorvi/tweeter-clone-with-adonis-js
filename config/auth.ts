import { defineConfig } from '@adonisjs/auth'
import { sessionGuard, sessionUserProvider } from '@adonisjs/auth/session'

export default defineConfig({
  default: 'web',
  guards: {
    web: sessionGuard({
      provider: sessionUserProvider({
        model: () => import('#models/user'),
        uids: ['email']
      }),
      useRememberMeTokens: false
    })
  }
})