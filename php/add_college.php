<?php
include 'db.php';

$name = $_POST['collegeName'];

$sql = "INSERT INTO colleges (name) VALUES ('$name')";
if ($conn->query($sql) === TRUE) {
    echo "New college added successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
