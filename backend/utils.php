<?php

/* CORS POlICY */

header('Access-Control-Allow-Origin: *');

/* CORS POlICY */


// The Type is Optional. 


function getCSV(array $file): array  // Return a normal Array of Associative-Array where the Column is key and Row is a Record of the Array. 
{

   $funcName = 'str_getcsv';
   $csv = array_map($funcName, $file); // Apply str_getcsv function to all elements of the Array
   array_walk($csv, function (&$a) use ($csv) {
      $a = array_combine($csv[0], $a);
   });
   array_shift($csv); // Remove the Header Row...
   return $csv;
}

function getTamponiTot(array $covid19): array // Push "tamponi" in a normal Array
{
   $tamponiTot = [];
   $key = 'tamponi';
   foreach ($covid19 as $row) {
      $tamponi = $row[$key];
      $tamponiTot[] = $tamponi;
   }
   return $tamponiTot;
}

function getTamponiGiornalieri(array $covid19): array
{
   $tamponiTot = getTamponiTot($covid19);
   $key = 'tamponi_giornalieri'; // Add new key to the Associative-Array
   $days = count($tamponiTot);
   $i = 0;
   for (; ($i < ($days - 1)); $i++) {
      $index = ($i + 1);
      $current = current($tamponiTot); // Array Pointer...
      $next = next($tamponiTot); // Array Pointer...
      $tamponi_giornalieri = ($next - $current);
      $covid19[$index][$key] = $tamponi_giornalieri; // Update the Array of Associative-Array 
   }
   return $covid19;
};

function getLastElements(array $arr, int $limit): array  // Return N Last elements of an Array...
{
   $len = count($arr);
   $limit_arr = [];
   $i = 0;
   for (; ($i < $limit); $i++) {
      $next = ($i + 1); // Or next function
      $index = ($len - $next);
      $data = $arr[$index];
      $limit_arr[] = $data;
   }
   $result = array_reverse($limit_arr);
   return $result;
}

$url = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv';

$limit = 10; // It is a parameter used in the index.php File (getLastElements function)

$color = '#FF0000';

$errMsg = (
   "<h1 style='color: $color'>
      <br /> CONNECTION ERROR.
   </h1>"
); // If we get an Error....


/* 

php --version

PHP 7.4.7 (cli) (built: Jun  9 2020 13:35:39) ( NTS Visual C++ 2017 x86 )
Copyright (c) The PHP Group
Zend Engine v3.4.0, Copyright (c) Zend Technologies

*/
