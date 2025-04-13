import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tweets'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id')
      table.text('content').notNullable()
      table.timestamps(true)

      // Index pour améliorer les performances
      table.index(['user_id'], 'tweets_user_id_index')
    })

    // Contrainte ajoutée séparément
    this.defer(async (db) => {
      await db.rawQuery(`
        ALTER TABLE ${this.tableName}
        ADD CONSTRAINT tweets_user_id_foreign
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
      `)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}