<?php
$category = $_POST['category'];
$title = $_POST['title'];
$req = $_POST['req'];
$acct = $_POST['acct'];
$descr = $_POST['descr'];

//db
$conn = new mysqli('localhost','root', '', 'ticketing_sys');
if($conn->connect_error){
    die('connection failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into ticket_table(category,title,req,acct,descr) values(?,?,?,?,?)");
    $stmt->bind_param("sssss",$category,$title, $req, $acct, $descr);
    $stmt->execute();
    echo "Successfull..";
    $stmt->close();
    $conn->close();
}
?>
