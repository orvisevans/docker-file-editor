<?php

include 'mysqli.php';
include 'api.php';

if (isset($_GET['id'])) {
  $id = $mysqli->real_escape_string($_GET['id']);
  $query = sprintf("SELECT * FROM users WHERE id = %s", $id);
} else {
  $query = "SELECT * FROM users";
}

$users = $mysqli->query($query);

$userArray = [];
foreach ($users as $user) {
  $userArray[] = $user;
}

if (count($userArray) > 0) {
  response(200, "OK", $userArray);
} else {
  response(404, "Not Found", null);
}
