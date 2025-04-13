import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'likes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().notNullable()
      table.integer('tweet_id').unsigned().notNullable()
      table.timestamps(true)

      // Empêche les doublons
      table.unique(['user_id', 'tweet_id'])
    })

    this.defer(async (db) => {
      await db.rawQuery(`
        ALTER TABLE ${this.tableName}
        ADD CONSTRAINT likes_user_id_foreign
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
      `)

      await db.rawQuery(`
        ALTER TABLE ${this.tableName}
        ADD CONSTRAINT likes_tweet_id_foreign
        FOREIGN KEY (tweet_id) REFERENCES tweets(id)
        ON DELETE CASCADE
      `)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}