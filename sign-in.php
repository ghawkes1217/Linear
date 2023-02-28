<?php // Get data from form 

$user_name = $_GET['user_name'];
$password= $_GET['password'];

 


$get= "SELECT * FROM users";



$link=mysqli_connect('localhost', 'root', 'root', 'student_responses'); 
$resp=mysqli_query($link, $get);



$exists=0;
  while ($row = mysqli_fetch_row($resp)) {
   if ($row[0]==$user_name and $row[1]==$password){
    $exists=1;
  }};


    
if ($exists==1){
$result="Welcome back ".$user_name."!";
};

if ($exists==0){
    $result="Invalid Credentials";
    };




header('Content-Type: application/json');
echo json_encode([$result]);
php?>
