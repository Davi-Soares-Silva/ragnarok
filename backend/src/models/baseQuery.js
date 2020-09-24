const connection = require('../config/db-connection');

module.exports = (sql, params) => {

   return new Promise((resolve, reject) => {
      connection.query(sql, params || '', (error, response) => {

         if (error) return reject(error);
         resolve(response)

      })
   })

}