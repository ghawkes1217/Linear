<?php


$user=$_GET['user'];


$get= "SELECT * FROM `modules` WHERE user_time='$user'";



$link=mysqli_connect('localhost', 'root', 'root','student_responses'); 

$resp=mysqli_query($link, $get);
$progress=[];
while ($row = mysqli_fetch_row($resp)) {
    array_push($progress,$row);
   }

  header('Content-Type: application/json');
  echo json_encode($progress);
php?>