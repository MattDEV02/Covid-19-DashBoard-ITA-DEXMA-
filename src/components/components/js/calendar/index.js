import getEvent from './utils';
import {
   formatData
} from '../table_data/index';


const getCovid19Date = covid19 => {
   const format = 'YYYY-MM-DD';
   let covid19Date = [];
   covid19.map(row => {
      const variazione = row.variazione_totale_positivi;
      if (variazione < 0) {
         const data = formatData(row.data, format);
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