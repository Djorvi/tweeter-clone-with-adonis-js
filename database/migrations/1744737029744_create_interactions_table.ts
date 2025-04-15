import { BaseSchema } from '@adonisjs/lucid/schema'
export default class extends BaseSchema {
  protected tableName = 'interactions'
  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('tweet_id').unsigned().references('id').inTable('tweets').onDelete('CASCADE')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('type').notNullable()
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }
  async down() {
    this.schema.dropTable(this.tableName)
  }
}
