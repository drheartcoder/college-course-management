<?php
include 'db.php';

$id = $_GET['id'];

$checkCourses = "SELECT * FROM courses WHERE college_id = $id";
$courseResult = $conn->query($checkCourses);

if ($courseResult->num_rows > 0) {
    echo "Cannot delete college with associated courses. Please delete the courses first.";
} else {
    $sql = "DELETE FROM colleges WHERE id = $id";
    if ($conn->query($sql) === TRUE) {
        echo "College deleted successfully";
    } else {
        echo "Error deleting college: " . $conn->error;
    }
}

$conn->close();
