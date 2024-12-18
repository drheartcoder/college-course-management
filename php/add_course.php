<?php
include 'db.php';

$name = $_POST['courseName'];
$description = $_POST['courseDescription'];
$collegeId = $_POST['collegeId'];

$sql = "INSERT INTO courses (name, description, college_id) VALUES ('$name', '$description', $collegeId)";
if ($conn->query($sql) === TRUE) {
    echo "New course added successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
