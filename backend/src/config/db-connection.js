const mysql = require('mysql');

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'bcd127',
   port: 3306,
   database: 'db_ragnarok'
});

connection.connect((err) => {
   if (err) {
      return console.log("error" + err.message);
   }

   console.log("Connected to the MySQL Server!");
})

module.exports = connection;