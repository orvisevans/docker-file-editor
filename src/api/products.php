<?php

include 'mysqli.php';
include 'api.php';

$where = [];
$select = "SELECT * FROM products";
if (isset($_GET['id'])) {
  $id = $mysqli->real_escape_string($_GET['id']);
  $where[] = sprintf("id = %s", $id);
}
if (isset($_GET['name'])) {
  $name = $mysqli->real_escape_string($_GET['name']);
  $where[] = sprintf("name LIKE '%%%s%%'", $name);
}

if (count($where) > 0) {
  $query = $select . ' WHERE ' . join(' AND ', $where);
} else {
  $query = $select;
}
$products = $mysqli->query($query);

$productArray = [];
foreach ($products as $product) {
  $productArray[] = $product;
}

if (count($productArray) > 0) {
  response(200, "OK", $productArray);
} else {
  response(404, "Not Found", null);
}
