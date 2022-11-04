<?php

include 'api/mysqli.php';


function create_tables($mysqli)
{
  echo "Creating tables...<br>";

  echo "Creating table users...<br>";
  $create_users = $mysqli->prepare("CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )");
  $create_users->execute();

  echo "Creating table products...<br>";
  $create_products = $mysqli->prepare("CREATE TABLE IF NOT EXISTS products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    PRIMARY KEY (id)
  )");
  $create_products->execute();

  echo "Creating table orders...<br>";
  $create_orders = $mysqli->prepare("CREATE TABLE IF NOT EXISTS orders (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )");
  $create_orders->execute();

  echo "Creating table order_products...<br>";
  $create_order_items = $mysqli->prepare("CREATE TABLE IF NOT EXISTS order_items (
    id INT NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
  )");
  $create_order_items->execute();

  echo "Creating table cart items...<br>";
  $create_cart_items = $mysqli->prepare("CREATE TABLE IF NOT EXISTS cart_items (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
  )");
  $create_cart_items->execute();

  echo "Tables created!<br>";
}

function insert_users($mysqli)
{
  echo "Inserting users...<br>";
  $mysqli->query("DELETE FROM users");

  $insert_users = $mysqli->prepare("INSERT INTO users (username) VALUES (?), (?), (?), (?)");
  $values = ['orvis', 'elina', 'wispra', 'finley'];
  $insert_users->bind_param('ssss', ...$values);
  $insert_users->execute();
}

function insert_products($mysqli)
{
  echo "Inserting products...<br>";
  $mysqli->query("DELETE FROM products");

  $insert_products = $mysqli->prepare("INSERT INTO products (name, price) VALUES (?, ?), (?, ?), (?, ?), (?, ?), (?, ?)");
  $values = ['fork', 100, 'spoon', 100, 'knife', 200, 'cup', 300, 'plate', 400];
  $insert_products->bind_param('sisisisisi', ...$values);
  $insert_products->execute();
}


$mysqli->autocommit(false);
try {
  create_tables($mysqli);
  insert_users($mysqli);
  insert_products($mysqli);
  $mysqli->commit();
  echo "Success!<br>";
} catch (\Throwable $th) {
  echo "Error: " . $th->getMessage();
  $mysqli->rollback();
}
$mysqli->autocommit(true);
