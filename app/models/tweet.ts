import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

import User from './user.js'
import Hashtag from './hashtag.js'
import Media from './media.js'
import Interaction from './interaction.js'

export default class Tweet extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare content: string

  @column()
  declare userId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // === Relations ===

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => Media)
  declare media: HasMany<typeof Media>

  @hasMany(() => Interaction)
  declare interactions: HasMany<typeof Interaction>

  @hasMany(() => Hashtag)
  declare hashtags: HasMany<typeof Hashtag>
}
