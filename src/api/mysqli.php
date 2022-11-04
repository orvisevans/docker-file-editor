<?php

$mysqli = new mysqli();
$mysqli->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, 1);
$mysqli->real_connect("db", "dockerfile_editor", "MY_PASSWORD", "dockerfile_editor");
