<?php
// echo "Hello";
// echo $_COOKIE["status"];
// echo $_COOKIE["status"][0];

$id = $_COOKIE["status"];
$newStatus = $_COOKIE["status2"];

// echo $id;
// echo $newStatus;

$host = 'localhost';
$username = 'root';
$password = '';
$db_name = 'ticketing_sys';

$db = mysqli_connect($host, $username, $password, $db_name);
$result = mysqli_query($db, "UPDATE ticket_table SET status = '$newStatus' WHERE id = $id");

// echo $result
?>