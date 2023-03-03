<?php


$user=$_GET['user'];
$mod=$_GET['module_number'];


$get= "SELECT * FROM `modules` WHERE module=$mod AND user_time='$user'";
$put= "INSERT INTO `modules` VALUES($mod,'$user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)";

$graderow='new';


$link=mysqli_connect('localhost', 'root', 'root','student_responses'); 

$resp=mysqli_query($link, $get);

  while ($row = mysqli_fetch_row($resp)) {
   $graderow=$row;
  }


  if ($graderow=='new'){
    $graderow=array($mod,$user,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    }


  header('Content-Type: application/json');
  echo json_encode($graderow);
php?>