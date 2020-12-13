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
   const covid19MinMax = {
      date: date,
      decessi: decessi,
      tamponi: tamponi,
      guariti: guariti,
      positivi: positivi
   };
   return covid19MinMax;
};

export default calculate;