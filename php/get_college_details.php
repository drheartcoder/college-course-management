<?php
include 'db.php';

$college_id = $_GET['college_id'];

$sql = "SELECT * FROM colleges WHERE id = $college_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $college = $result->fetch_assoc();
    echo json_encode(['college' => $college]);
} else {
    echo json_encode(null);
}

$conn->close();
