<?php

require('functions.php');

$url = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv';

$file = file($url);

$csv = array_map($fun, $file);

array_walk($csv, function (&$a) use ($csv) {
   $a = array_combine($csv[0], $a);
});

array_shift($csv);

$limit_data = getLastElements($csv, 10);

$json = json_encode($limit_data);

echo $json;
