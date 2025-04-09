
import { HttpContext } from '@adonisjs/core/http'

export default class SimpleController {
    async login ({ view }: HttpContext) {
        return view.render('pages/login')
    }
}


