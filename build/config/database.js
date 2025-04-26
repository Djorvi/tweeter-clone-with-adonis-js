import env from '#start/env';
import { defineConfig } from '@adonisjs/lucid';
function getRequiredEnv(key) {
    const value = env.get(key);
    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
}
export default defineConfig({
    connection: env.get('DB_CONNECTION', 'pg'),
    connections: {
        pg: {
            client: 'pg',
            connection: {
                host: getRequiredEnv('DB_HOST'),
                port: Number(getRequiredEnv('DB_PORT')),
                user: getRequiredEnv('DB_USER'),
                password: getRequiredEnv('DB_PASSWORD'),
                database: getRequiredEnv('DB_DATABASE'),
                ssl: env.get('DB_SSL') ? { rejectUnauthorized: false } : false
            },
            migrations: {
                naturalSort: true,
                paths: ['database/migrations']
            }
        }
    }
});
//# sourceMappingURL=database.js.map