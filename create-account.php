<?php
$data = json_decode(file_get_contents("php://input"), true);
$user_name = $data['user_name'];
$school = $data['school'];

// Connect to MySQL
$link = mysqli_connect('localhost', 'root', 'root', 'student_responses');
$get  = "SELECT * FROM users";
$resp = mysqli_query($link, $get);

$result = "";
$exists = false;

// Check if username already exists
while ($row = mysqli_fetch_row($resp)) {
    if ($row[0] === $user_name) {
        $exists = true;
        break;
    }
}

// Validation checks

  if ($exists) {
    $result = "Username taken. Please select another username.";
} elseif (strlen($user_name) < 3) {
    $result = "Username too short";
} elseif (strlen($school) < 2) {
    $result = "School name too short";
} else {
    // If all checks pass, insert new user
    $insert = "INSERT INTO users VALUES ('$user_name', '$school')";
    $action = mysqli_query($link, $insert);
    if ($action) {
        $result = "New account creation successful";
    } else {
        $result = "Database error during account creation";
    }
}

// Return result as JSON
header('Content-Type: application/json');
echo json_encode($result);
?>