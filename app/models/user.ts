import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'

import PrivacySetting from './privacy_setting.js'
import Tweet from './tweet.js'
import Following from './following.js'
import Notification from './notification.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password_hash: string

  @column()
  declare profile_picture: string | null

  @column()
  declare bio: string | null

  @column()
  declare localisation: string | null

  @column()
  declare website: string | null

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  // === Relations ===

  @hasOne(() => PrivacySetting)
  declare privacySetting: HasOne<typeof PrivacySetting>

  @hasMany(() => Tweet)
  declare tweets: HasMany<typeof Tweet>

  @hasMany(() => Following, { foreignKey: 'follower_user_id' })
  declare followings: HasMany<typeof Following>

  @hasMany(() => Notification)
  declare notifications: HasMany<typeof Notification>
}
