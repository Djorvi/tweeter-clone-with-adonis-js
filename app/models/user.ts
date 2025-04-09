import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@adonis/Lucid/Orm' 
import Hash from '@adonisjs/core/http'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  // Hash le mot de passe avant de sauvegarder
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}