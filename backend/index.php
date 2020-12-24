<?php

require_once('utils.php');

$json = '';

try {
   $file = file($url);
   if (!$file) throw new Exception($exceptionMsg);
   $csv = array_map($funcName, $file);
   $csv = getCSV($csv);
   $limit_data = getLastElements($csv, $limit);
   $json = json_encode($limit_data);
} catch (Exception $e) {
   echo $e->getMessage();
} finally {
   echo ($json);
}
