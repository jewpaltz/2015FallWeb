var g = require("../inc/global");
var userId = 4;

module.exports =  {
    blank: function(){ return {} },
    get: function(id, ret){
        var conn = g.GetConnection();
        var sql = 'SELECT E.*, K.Name as TypeName, P.Name as PersonName FROM 2015Fall_Exercise_Done E '
                + '   Join 2015Fall_Persons P ON E.UserId = P.id '
                + '   Join 2015Fall_Keywords K ON E.TypeId = K.id ';
        if(id){
          sql += " WHERE E.id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = g.GetConnection();
        conn.query("DELETE FROM 2015Fall_Exercise_Done WHERE id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = g.GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update 2015Fall_Exercise_Done "
							+ " Set `TypeId`=?, `UserId`=?, `Name`=?, `Time`=?, `Duration`=?, `Intensity`=? "
						  + " WHERE id = ? ";
			  }else{
				  sql = "INSERT INTO `2015Fall_Exercise_Done` (`created_at`, `TypeId`, `UserId`, `Name`, `Time`, `Duration`, `Intensity`) "
						  + "VALUES (Now(), ?, ?, ?, ?, ?, ? ) ";				
			  }

        conn.query(sql, [row.TypeId, row.UserId, row.Name, row.Time, row.Duration, row.Intensity, row.id],function(err,data){
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

