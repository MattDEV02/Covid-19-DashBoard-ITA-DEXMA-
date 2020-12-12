/*
let
   date = [],
   positivi = [],
   decessi = [],
   tamponi = [],
   guariti = [];

const calculate = data => {
   data.map(row => {
      positivi.push(row.nuovi_positivi);
      decessi.push(row.deceduti);
      tamponi.push(row.tamponi);
      guariti.push(row.dimessi_guariti);
      date.push(row.data);
   });
   const covid19 = {
      date: date,
      decessi: decessi,
      tamponi: tamponi,
      guariti: guariti,
      positivi: positivi
   };
   return covid19;
};
*/

const endPoint = 'http://127.0.0.1:8080/covid19/backend/';

export default endPoint;

