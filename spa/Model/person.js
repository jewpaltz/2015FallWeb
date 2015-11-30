var mysql = require("mysql");

module.exports =  {
    blank: function(){ return {} },
    get: function(id, ret){
        var conn = GetConnection();
        var sql = 'SELECT P.*, K.Name as TypeName FROM 2015Fall_Persons P Join 2015Fall_Keywords K ON P.TypeId = K.id ';
        if(id){
          sql += " WHERE P.id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = GetConnection();
        conn.query("DELETE FROM 2015Fall_Persons WHERE id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update 2015Fall_Persons "
							+ " Set Name=?, Birthday=?, TypeId=? "
						  + " WHERE id = ? ";
			  }else{
				  sql = "INSERT INTO 2015Fall_Persons "
						  + " (Name, Birthday, created_at, TypeId) "
						  + "VALUES (?, ?, Now(), ? ) ";				
			  }

        conn.query(sql, [row.Name, row.Birthday, row.TypeId, row.id],function(err,data){
          if(!err && !row.id){
            row.id = data.insertId;
          }
          ret(err, row);
          conn.end();
        });        
    },
    validate: function(row){
      var errors = {};
      
      if(!row.Name) errors.Name = "is required"; 
      
      return errors.length ? errors : false;
    }
};  

function GetConnection(){
        var conn = mysql.createConnection({
          host: "localhost",
          user: "blabla",
          password: "1212",
          database: "c9"
        });
    return conn;
}