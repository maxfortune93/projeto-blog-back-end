// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  
  
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3307,
      database: 'db_blogTeste',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }


  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // const knex = require('knex')({
  //   client: 'mysql',
  //   connection: {
  //     host : '127.0.0.1',
  //     port : 3306,
  //     user : 'your_database_user',
  //     password : 'your_database_password',
  //     database : 'myapp_test'
  //   }
  // });

};
