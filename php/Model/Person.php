<?php
    include '../inc/global.php';
    class Person {
        static function Get(){
            $conn = GetConnection();
            $result = $conn->query("SELECT * FROM 2015Fall_Persons");
            $rs = $result->fetch_assoc();
            var_dump($rs);
            my_print($rs);
        }
    }
    
    Person::Get();