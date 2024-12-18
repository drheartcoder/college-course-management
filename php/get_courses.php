<?php
include 'db.php';

$college_id = $_GET['college_id'];

$sql = "SELECT * FROM courses WHERE college_id = $college_id";
$result = $conn->query($sql);

$courses = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $courses[] = $row;
    }
}
echo json_encode($courses);

$conn->close();
