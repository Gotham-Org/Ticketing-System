<?php

$host = 'localhost';
$username = 'root';
$password = '';
$db_name = 'ticketing_sys';

$db = mysqli_connect($host, $username, $password, $db_name);
$result = mysqli_query($db, "SELECT * from ticket_table");

$json_array = array();
while($row = mysqli_fetch_assoc($result)){
    $json_array[] = $row;
}
print(json_encode($json_array))

?>