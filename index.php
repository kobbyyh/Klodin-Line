
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kayywrld";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind the INSERT statement
$stmt = $conn->prepare("INSERT INTO customer_table (first_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $firstName, $lastName, $email, $phone, $password);



// Hash the password before inserting it into the database
$password = password_hash($password, PASSWORD_DEFAULT);

// Execute the INSERT statement
$stmt->execute();


// Get form data
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$password = $_POST["password"];
$confirmPassword = $_POST["confirmPassword"];

// Check if passwords match
if ($password != $confirmPassword) {
  echo "Passwords do not match";
} else {
  // Hash password
  $password = password_hash($password, PASSWORD_DEFAULT);

  // Insert data into database
  $sql = "INSERT INTO customer_table (first_name, last_name, email, phone, password) 
  VALUES ('$firstName', '$lastName', '$email', '$phone', '$password')";
  if ($conn->query($sql) === TRUE) {
    echo "User created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}
// Close the statement and the connection
$stmt->close();
$conn->close();
?>
