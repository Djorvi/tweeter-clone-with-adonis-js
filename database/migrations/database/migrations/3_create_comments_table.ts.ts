import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().notNullable()
      table.integer('tweet_id').unsigned().notNullable()
      table.text('content').notNullable()
      table.timestamps(true)

      table.index(['user_id'], 'comments_user_id_index')
      table.index(['tweet_id'], 'comments_tweet_id_index')
    })

    this.defer(async (db) => {
      await db.rawQuery(`
        ALTER TABLE ${this.tableName}
        ADD CONSTRAINT comments_user_id_foreign
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
      `)

      await db.rawQuery(`
        ALTER TABLE ${this.tableName}
        ADD CONSTRAINT comments_tweet_id_foreign
        FOREIGN KEY (tweet_id) REFERENCES tweets(id)
        ON DELETE CASCADE
      `)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}