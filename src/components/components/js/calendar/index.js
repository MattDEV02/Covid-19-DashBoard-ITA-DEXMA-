import moment from 'moment';


const formatData = data => {
   const format = 'YYYY-MM-DD';
   const formatted = moment(data).format(format);
   return formatted;
};

const getEvent = data => {
   const title = 'Variazione < 0';
   const event = {
      title: title,
      date: data
   };
   return event;
};

const getCovid19Date = covid19 => {
   let covid19Date = [];
   covid19.map(row => {
      const variazione = row.variazione_totale_positivi;
      if (variazione < 0) {
         const data = formatData(row.data);
         const event = getEvent(data);
         covid19Date.push(event);
      }
   });
   return covid19Date;
};

const tooltipID = 'calendar-tooltip';

export default getCovid19Date;

export {
   tooltipID
};