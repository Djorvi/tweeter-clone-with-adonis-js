// import type { HttpContext } from '@adonisjs/core/http'

// app/Controllers/HomeController.ts

import type { HttpContext } from '@adonisjs/core/http'



export default class HomeController {
  public async index({ view }: HttpContext) {
    // const currentUser 

    return view.render('pages/loginPage', {  })
  }
}
