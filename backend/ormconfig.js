const fs = require('fs')
const ENVIRONMENT = process.env.NODE_ENV || 'development'
const fileName = `.env.${ENVIRONMENT}`

if (fs.existsSync(fileName)) {
  require('dotenv').config({ path: fileName })
}

module.exports = {
  "type": process.env.DB_CONNECTION,
  "database": process.env.DB_DATABASE,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "logging": process.env.DB_LOGGING,
  "entities": [process.env.DB_ENTITIES],
  "migrations": [process.env.DB_MIGRATION],
  "cli": {
    "entitiesDir": process.env.DB_ENTITIES_DIR,
    "migrationsDir": process.env.DB_MIGRATIONS_DIR
  }
}