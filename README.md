# DEXMA Entry Test

## Online Demo -> https://covid-19-dash-board-ita.herokuapp.com/

## Description:

At the page loading the Client makes 2 Async HTTP Request with GET method in concurrently at http://localhos:8080/covid19/backend and 

https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json 

, If the Request returns an Error we will view an Error message , else we will view the Output Data with tables , 

charts , calendars , maps...

It would has been better to set port 80 since It is the standard port of the HTTP protocol but Xampp didn't make me set it up.

The PHP Script (http://localhos:8080/covid19/backend) reads the CSV file at https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/

dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv , puts the content into a variable , then convert It into Array of

Associative-Array (key => Value , the Key is the Column) from which I will take the last 10 elements and finally convert It into a JSON 

that will printed with the "echo" keyword. There is also Error prevention.

In the JSON file at https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json I take the 

Covid-19 data of the Italians Regions for generate a simple dynamic Map