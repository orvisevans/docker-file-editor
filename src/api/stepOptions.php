<?php

include 'mysqli.php';
include 'api.php';

if (isset($_GET['id'])) {
  $id = $mysqli->real_escape_string($_GET['id']);
  $query = sprintf("SELECT * FROM step_option WHERE id = %s", $id);
} else {
  $query = "SELECT * FROM step_option";
}

$steps = $mysqli->query($query);

$stepArray = [];
foreach ($steps as $step) {
  $stepArray[] = $step;
}

if (count($stepArray) > 0) {
  response(200, $stepArray);
} else {
  response(404, null);
}
