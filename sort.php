<?php

$host = 'localhost';
$username = 'root';
$password = '';
$db_name = 'ticketing_sys';

$sort_col = $_COOKIE['sortCol'];
$sort_by = $_COOKIE['sortBy'];

// echo $sort_col; 
// echo $sort_by;

// echo "SELECT * FROM `ticket_table` ORDER BY `ticket_table`.`$sort_col` $sort_by"

$db = mysqli_connect($host, $username, $password, $db_name);
$result = mysqli_query($db, "SELECT * FROM `ticket_table` ORDER BY `ticket_table`.`$sort_col` $sort_by");

$json_array = array();
while($row = mysqli_fetch_assoc($result)){
    $json_array[] = $row;
}
print(json_encode($json_array))

?>