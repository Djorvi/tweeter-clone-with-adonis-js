import { BaseSchema} from '@adonis/Lucid/Schema'


export default class CreateUsersTable extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('avatar').nullable()
      table.text('bio').nullable()
      table.timestamps(true)  // Utilisez cette méthode au lieu de déclarer created_at/updated_at manuellement
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

