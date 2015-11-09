<?php
require_once '../inc/global.php';

class Person {
    public static function Get($id = null){
        $sql = "SELECT * FROM 2015Fall_Persons";
        
		if($id){
			$sql .= " WHERE id=$id ";
			$ret = FetchAll($sql);
			return $ret[0];
		}else{
			return FetchAll($sql);			
		}
		
    }
    
    static public function Delete($id)
	{
		$conn = GetConnection();
		$sql = "DELETE FROM 2015Fall_Persons WHERE id = $id";
		//echo $sql;
		$results = $conn->query($sql);
		$error = $conn->error;
		$conn->close();
		
		return $error ? array ('sql error' => $error) : false;
	}
	
	static public function Blank()
	{
		return array();
	}



		static public function Validate($row)
		{
			$errors = array();
			if(empty($row['Name'])) $errors['Name'] = "is required";
			if(strtotime($row['Birthday']) > time()) $errors['Birthday'] = "must be in the past";
			
			return count($errors) > 0 ? $errors : false ;
		}
	
		static public function Save(&$row)
		{
			$conn = GetConnection();
			
			$row2 = escape_all($row, $conn);
			$row2['Birthday'] = date( 'Y-m-d H:i:s', strtotime( $row2['Birthday'] ) );
			if (!empty($row['id'])) {
				$sql = "Update 2015Fall_Persons
							Set Name='$row2[Name]', Birthday='$row2[Birthday]'
						WHERE id = $row2[id]
						";
			}else{
				$sql = "INSERT INTO 2015Fall_Persons
						(Name, Birthday, created_at)
						VALUES ('$row2[Name]', '$row2[Birthday]', Now() ) ";				
			}
			
			
			//my_print( $sql );
			
			$results = $conn->query($sql);
			$error = $conn->error;
			
			if(!$error && empty($row['id'])){
				$row['id'] = $conn->insert_id;
			}
			
			$conn->close();
			
			return $error ? array ('sql error' => $error) : false;
		}


}


