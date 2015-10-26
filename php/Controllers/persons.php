<?php
include "../Model/Person.php";

    $rs = Person::Get();
    
    my_print($rs);
?>
