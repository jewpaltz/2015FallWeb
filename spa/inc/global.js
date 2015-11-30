var mysql = require("mysql");

module.exports =  {
    GetConnection: function(){
        var conn = mysql.createConnection({
          host: "localhost",
          user: "blabla",
          password: "1212",
          database: "c9"
        });
    return conn;
}
};