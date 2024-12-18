<?php
include 'db.php';

$id = $_GET['id'];

$sql = "DELETE FROM courses WHERE id = $id";
if ($conn->query($sql) === TRUE) {
    echo "Course deleted successfully";
} else {
    echo "Error deleting course: " . $conn->error;
}

$conn->close();
