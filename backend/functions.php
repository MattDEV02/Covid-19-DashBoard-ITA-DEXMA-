<?php

/* CORS POlICY */
//-----------------------------------------------------------------------------------------------------
if (isset($_SERVER['HTTP_ORIGIN'])) {
   header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
   header('Access-Control-Allow-Credentials: true');
   header('Access-Control-Max-Age: 86400');
}
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
   if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
      header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
   if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
      header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
   exit(0);
}
//-------------------------------------------------------------------------------------------------------------

function getCSV($csv)
{
   array_walk($csv, function (&$a) use ($csv) {
      $a = array_combine($csv[0], $a);
   });
   array_shift($csv);
   return $csv;
}

function getLastElements($arr, $limit)
{
   $len = count($arr);
   $limit_arr = [];
   for ($i = 0; ($i < $limit); $i++) {
	  $current = ($i+1);
      $index = ($len - $current);
      $data = $arr[$index];
      array_push($limit_arr, $data);
   }
   return $limit_arr;
}

$funcName = 'str_getcsv';

?>