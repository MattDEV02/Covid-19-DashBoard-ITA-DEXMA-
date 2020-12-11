<?php

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
   $limit_arr = [];
   do {
      $cond = (count($limit_arr) < $limit);
      $data = end($arr);
      array_push($limit_arr, $data);
      array_pop($arr);
   } while ($cond);
   return $limit_arr;
}

$fun = 'str_getcsv';
