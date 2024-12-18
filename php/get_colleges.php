<?php
include 'db.php';

$sql = "SELECT * FROM colleges";
$result = $conn->query($sql);

$colleges = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $colleges[] = $row;
    }
}
echo json_encode($colleges);

$conn->close();
