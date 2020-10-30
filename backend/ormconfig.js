import fs from 'fs'
import { config } from 'dotenv'

if (fs.existsSync(`.env.${process.env.NODE_ENV}`)) {
  config({ path: `.env.${process.env.NODE_ENV}` })
} else if (fs.existsSync('.env')) {
  config({ path: '.env' })
}

export default {
  "type": process.env.TYPEORM_CONNECTION,
  "database": process.env.TYPEORM_DATABASE,
  "host": process.env.TYPEORM_HOST,
  "port": process.env.TYPEORM_PORT,
  "username": process.env.TYPEORM_USERNAME,
  "password": process.env.TYPEORM_PASSWORD,
  "logging": process.env.TYPEORM_LOGGING,
  "entities": [
    process.env.TYPEORM_ENTITIES
  ],
  "migrations": [
    process.env.TYPEORM_MIGRATIONS
  ],
  "cli": {
    "entitiesDir": process.env.TYPEORM_ENTITIES_DIR,
    "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR
  }
}