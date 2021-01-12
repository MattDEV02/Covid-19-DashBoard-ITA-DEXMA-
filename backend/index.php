<?php

require_once('utils.php'); // Put utils.php file in this file.


$json = '';

try {
   $file = file($url);
   if (!$file) throw new Exception($errMsg);  // If we got an Error - Problem ( Connection Error , File Deleted , ecc... ) ; this will stop the try execution and go to catch statement.
   $covid19 = getCSV($file);  // Normal Array to Normal Array of Associative-Array ( Column = key , Row = Record).
   $covid19_updated = getTamponiGiornalieri($covid19);  // Add "tamponi_giornaliery" Key
   $limit_covid19 = getLastElements($covid19_updated, $limit);  // Last 10 days...
   $json = json_encode($limit_covid19);  // Array of Associative-Array to JSON.
} catch (Exception $e) {
   $Exmsg = $e->getMessage();
   die($Exmsg);  // Print the Message of the Exception throwed and Stop the Execution
} finally {
   echo $json;  // Print the final Result
}

?>
