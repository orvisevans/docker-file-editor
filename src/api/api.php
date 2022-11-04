<?php

function response($status, $status_message, $data)
{
  http_response_code($status);
  header('Content-Type: application/json; charset=utf-8');
  $response['status'] = $status;
  $response['status_message'] = $status_message;
  $response['data'] = $data;
  $json_response = json_encode($response);
  echo $json_response;
}
