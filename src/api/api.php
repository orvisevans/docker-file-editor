<?php

function response($status, $data)
{
  http_response_code($status);
  header('Content-Type: application/json; charset=utf-8');
  $json_response = json_encode($data);
  echo $json_response;
}
