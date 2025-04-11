import { BaseModel, column, belongsTo, BelongsTo } from '@Adonis/Lucid/Orm'
import User from './User'

export default class Tweet extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare content: string

  @column()
  declare image: string

  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}