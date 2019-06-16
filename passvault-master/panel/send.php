 <?php
$servername = "myvault.cipkdczwtby0.us-east-1.rds.amazonaws.com";
$username = "myvault";
$password = "password123";
$dbname = "passvault";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO alexa_skill_user_table (user_mail, user_mobile, user_superpin)
VALUES ('$email', '$number', '$pin')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 