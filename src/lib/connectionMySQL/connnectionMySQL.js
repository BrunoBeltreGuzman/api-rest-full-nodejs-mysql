const mysql = require("mysql");
const { connectionConfig } = require("../../config/properties");

const connection = mysql.createConnection(connectionConfig);

connection.connect(function (error) {
       if (error) {
              console.error("error connecting: " + error.stack);
              return;
       } else {
              console.log(
                     "Data Base '" + connectionConfig.database + "' Connected!"
              );
       }
});

module.exports = connection;
