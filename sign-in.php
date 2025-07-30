<?php // Get data from form 

// Decode JSON body from POST
$data = json_decode(file_get_contents("php://input"), true);
$user_name = $data['user_name'];
$school  = $data['school'];

// Connect to database
$link = mysqli_connect('localhost', 'root', 'root', 'student_responses');
$get  = "SELECT * FROM users";
$resp = mysqli_query($link, $get);

$result = "Invalid Credentials";

// Check credentials
while ($row = mysqli_fetch_row($resp)) {
    if ($row[0] === $user_name && $row[1] === $school) {
        $result = "Welcome back " . $user_name . "!";
        break;
    }
}

// Send JSON response
header('Content-Type: application/json');
echo json_encode($result);
?>