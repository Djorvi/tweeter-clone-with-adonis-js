import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'retweets';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1744736323634_create_retweets_table.js.map