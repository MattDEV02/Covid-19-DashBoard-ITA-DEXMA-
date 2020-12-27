<?php

/* CORS POlICY */
//-------------------------------------------------------------------------------------------------------------

header('Access-Control-Allow-Origin: *');

//-------------------------------------------------------------------------------------------------------------
/* CORS POlICY */


function getCSV($file)  // Return a normal Array of Associative-Array where the Column is key and Row is a Record of the Array. 
{

   $funcName = 'str_getcsv';
   $csv = array_map($funcName, $file);
   array_walk($csv, function (&$a) use ($csv) {
      $a = array_combine($csv[0], $a);
   });
   array_shift($csv); // Remove the Header Row...
   return $csv;
}

function getLastElements($arr, $limit)  // Return N Last elements of an Array...
{
   $len = count($arr);
   $limit_arr = [];
   $i = 0;
   for (; ($i < $limit); $i++) {
      $current = ($i + 1);
      $index = ($len - $current);
      $data = $arr[$index];
      $limit_arr[] = $data;
   }
   return $limit_arr;
}

$url = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv';

$limit = 10; // It is a parameter used in the index.php File

$exceptionMsg =
   '<h1 style="color: #ff0000">
      <br/> CONNECTION ERROR.
   </h1>'; // If we get an Error....
