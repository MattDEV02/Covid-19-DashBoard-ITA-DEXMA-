<?php

require_once('utils.php'); // Put utils.php file in this file.

$json = ''; // Declare and Init String Variable.

try {
   $file = file($url); // Read the content and put him into simple Array with 1 Element.
   if (!$file) throw new Exception($exceptionMsg); // If we got an Error - Problem ( Connection Error , File Deleted , ecc... ) ; this will stop the try execution and go to catch statement.
   $data = getCSV($file); // Normal Array to Normal Array of Associative-Array ( Column = key ).
   $limit_data = getLastElements($data, $limit); // Last 10 days.
   $json = json_encode($limit_data); // Array of Associative-Array to JSON.
} catch (Exception $e) {
   echo $e->getMessage(); // Print the Message of the Exceptionn throwed.
} finally {
   echo $json; // Print the final Result
}
