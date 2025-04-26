import env from '#start/env';
import { defineConfig } from '@adonisjs/lucid';
function getDatabaseConnection() {
    const url = env.get('DATABASE_URL');
    if (typeof url === 'string') {
        return url;
    }
    return `postgresql://${env.get('DB_USER')}:${env.get('DB_PASSWORD')}@${env.get('DB_HOST')}:${env.get('DB_PORT')}/${env.get('DB_DATABASE')}`;
}
export default defineConfig({
    connection: 'pg',
    connections: {
        pg: {
            client: 'pg',
            connection: getDatabaseConnection(),
            migrations: {
                naturalSort: true,
                paths: ['database/migrations']
            }
        }
    }
});
//# sourceMappingURL=database.js.map