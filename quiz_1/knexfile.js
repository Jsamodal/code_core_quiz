// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:"clucks"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./db/migrations"

    }
  },


};
