// import env from '#start/env'
// import { defineConfig } from '@adonisjs/lucid'

// function getDatabaseConnection() {
//   const url = env.get('DATABASE_URL')
//   if (typeof url === 'string') {
//     return url
//   }

//   // Fallback aux variables individuelles
//   return `postgresql://${env.get('DB_USER')}:${env.get('DB_PASSWORD')}@${env.get('DB_HOST')}:${env.get('DB_PORT')}/${env.get('DB_DATABASE')}`
// }

// export default defineConfig({
//   connection: 'pg',

//   connections: {
//     pg: {
//       client: 'pg',
//       connection: getDatabaseConnection(),
//       migrations: {
//         naturalSort: true,
//         paths: ['database/migrations']
//       }
//     }
//   }
// })

import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'


const dbConfig = defineConfig({
 connection: 'postgres',
 connections: {
   postgres: {
     client: 'pg',
     connection: {
       connectionString: env.get('DATABASE_URL'),
       ssl: { rejectUnauthorized: false }
     },
     migrations: {
       naturalSort: true,
       paths: ['database/migrations']
     }
   }
 }
})


export default dbConfig
