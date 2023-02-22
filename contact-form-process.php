// Get data from form 
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
 
$to = "ghawkes1217@gmail.com";
$subject =  $name.": ".$email;
 
// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message
$txt =$message;
 
$headers = "From: noreply@domain.com";

mail($to, $subject, $txt, $headers);





 header('Location: index.html');
?>