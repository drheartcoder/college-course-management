<?php
include 'db.php';

$course_id = $_GET['course_id'];

$sql = "SELECT courses.name, courses.description, colleges.name AS college_name 
        FROM courses 
        LEFT JOIN colleges ON courses.college_id = colleges.id 
        WHERE courses.id = $course_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $course = $result->fetch_assoc();
    echo json_encode($course);
} else {
    echo json_encode(null);
}

$conn->close();
