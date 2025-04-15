import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import User from './user.js'
import Tweet from './tweet.js'
import  type { BelongsTo } from '@adonisjs/lucid/types/relations'


export default class Interaction extends BaseModel {


  @column({ isPrimary: true })
  declare id: number
  @column()
  declare tweetId: number
  @column()
  declare user_id: number
  @column()
  declare type: string
  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  
  // Relations
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
  @belongsTo(() => Tweet)
  declare tweet: BelongsTo<typeof Tweet>
}












