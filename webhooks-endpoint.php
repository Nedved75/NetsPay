<?php

$json = file_get_contents('php://input');
$payload = json_decode($json, true);
if (json_last_error() != JSON_ERROR_NONE) {
    echo (json_last_error_msg());
    var_dump($result);
    exit("Unable to parse json request body");
}

// Read properties common to all events
$name = $payload['event'];
$id = $payload['id'];
$merchantNumber = $payload['merchantId'];
if (empty($merchantNumber)) {
    // Some of the events use the key "merchantId"
    // for the merchant number.
    $merchantNumber = $payload['merchantId'];
}
$timestamp = $payload['timestamp'];
$data = $payload['data'];
$paymentId = $data['paymentId'];

if ($name == "payment.created") {
  // Process payment.created event here
  // ...
}