<?php // Get data from form 

$user_name = $_GET['user_name'];
$password= $_GET['password'];
$repeat= $_GET['repeat'];
 


$get= "SELECT * FROM users";
$insert= "INSERT INTO users VALUES('$user_name', '$password')";


$link=mysqli_connect('localhost', 'root', 'root', 'student_responses'); 
$resp=mysqli_query($link, $get);



$exists=0;
  while ($row = mysqli_fetch_row($resp)) {
   if ($row[0]==$user_name){
    $exists=1;
  }};

if ($password!=$repeat){
    $result="Passwords are not the same";
    };
    
if ($exists==1){
$result="Username taken. Please select another username.";
};




if ($password==$repeat && $exists==0){
$action=mysqli_query($link, $insert);    
$result="New account creation successful";
};

header('Content-Type: application/json');
echo json_encode([$result]);
php?>
