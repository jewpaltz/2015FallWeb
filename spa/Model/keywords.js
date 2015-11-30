var g = require("../inc/global");

module.exports =  {
    blank: function(){ return {} },
    get: function(id, ret){
        var conn = g.GetConnection();
        var sql = 'SELECT K.* FROM 2015Fall_Keywords K ';
        if(id){
          sql += " WHERE K.id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    }
};  
