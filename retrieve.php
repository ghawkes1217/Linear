<?php


$numstring=$_GET['modq'];
$mod=$_GET['module_number'];
$quest=$_GET['quest'];
$r="r".$quest;
$w="w".$quest;

$get= "SELECT $r, $w FROM `modules` WHERE module=$mod and ($r+$w>0)";


$right=0;
$wrong=0;
$users=0;
$eventual=0;


$link=mysqli_connect('localhost', 'root', 'root','student_responses'); 

$resp=mysqli_query($link, $get);

  while ($row = mysqli_fetch_row($resp)) {
   $right+=$row[0];
   $wrong+=$row[1];
   $users+=1;
   if ($row[0]>0){
     $eventual+=1;}
  }


  header('Content-Type: application/json');
  echo json_encode([$users,$right,$wrong,$eventual]);
php?>