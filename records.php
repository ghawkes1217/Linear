<?php


$gradestring=$_GET['gradestring'];
$user=$_GET['user'];
$module_number=$_GET['module_number'];
$new=0;
if(strpos($gradestring, "1") == false 
and strpos($gradestring, "2") == false
and strpos($gradestring, "3") == false
and strpos($gradestring, "4") == false
and strpos($gradestring, "5") == false
and strpos($gradestring, "6") == false
and strpos($gradestring, "7") == false
and strpos($gradestring, "8") == false
and strpos($gradestring, "9") == false)
{
$new=1;}



$add= "INSERT INTO modules VALUES($module_number, $user, $gradestring)";
$remove= "DELETE FROM modules WHERE user_time=$user";



$link=mysqli_connect('localhost', 'root', 'root', 'student_responses'); 

if ($new==0){
mysqli_query($link, $remove);}

mysqli_query($link, $add);

php?>