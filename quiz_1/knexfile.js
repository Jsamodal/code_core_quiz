// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: './dev.sqlite3',
      databse:"clucks_development"
    },
  migrations: {
      tableName: 'knex_migrations',
      directory: "./db/migrations"
    },
 

  }
  
};
