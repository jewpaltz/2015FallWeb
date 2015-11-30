var g = require("../inc/global");
var userId = 4;

module.exports =  {
    blank: function(){ return {} },
    get: function(id, ret){
        var conn = g.GetConnection();
        var sql = 'SELECT F.* FROM 2015Fall_Food_Eaten F ';
        if(id){
          sql += " WHERE F.id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = g.GetConnection();
        conn.query("DELETE FROM 2015Fall_Food_Eaten WHERE id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = g.GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update 2015Fall_Food_Eaten "
							+ " Set `Name`=?, `Calories`=?, `Fat`=?, `Carbs`=?, `Fiber`=?, `Time`=?, `UserId`=? "
						  + " WHERE id = ? ";
			  }else{
				  sql = "INSERT INTO `2015Fall_Food_Eaten` (`created_at`, `Name`, `Calories`, `Fat`, `Carbs`, `Fiber`, `Time`, `UserId`)"
						  + "VALUES (NOW(), ?, ?, ?, ?, ?, ?, ?) ";				
			  }

        conn.query(sql, [row.Name, row.Calories, row.Fat, row.Carbs, row.Fiber, row.Time, row.UserId, row.id],function(err,data){
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

