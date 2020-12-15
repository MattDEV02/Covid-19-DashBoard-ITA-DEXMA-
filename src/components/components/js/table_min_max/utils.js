import {
   formatData
} from '../table_data/utils';


let
   nuovi_positivi = [],
   ingressi_terapia_intensiva = [],
   variazioni_totale_positivi = [],
   date = [];

const arrayFetch = dati => {
   if (nuovi_positivi.length === 0) {
      dati.map(row => {
         nuovi_positivi.push(row.nuovi_positivi);
         ingressi_terapia_intensiva.push(row.ingressi_terapia_intensiva);
         variazioni_totale_positivi.push(row.variazione_totale_positivi);
         date.push(formatData(row.data));
      });
   }
   const covid19 = {
      nuovi_positivi: nuovi_positivi,
      ingressi_terapia_intensiva: ingressi_terapia_intensiva,
      variazioni_totale_positivi: variazioni_totale_positivi,
      date: date
   };
   return covid19;
};

const calculate = covid19 => {
   arrayFetch(covid19);
   const
      minNuovi_positivi = Math.min(...nuovi_positivi),
      maxNuovi_positivi = Math.max(...nuovi_positivi),
      minIngressi_terapia_intensiva = Math.min(...ingressi_terapia_intensiva),
      maxIngressi_terapia_intensiva = Math.max(...ingressi_terapia_intensiva),
      minVariazioni_totale_positivi = Math.min(...variazioni_totale_positivi),
      maxVariazioni_totale_positivi = Math.max(...variazioni_totale_positivi);
   const covid19Calculated = {
      nuovi_positivi: {
         min: minNuovi_positivi,
         max: maxNuovi_positivi
      },
      ingressi_terapia_intensiva: {
         min: minIngressi_terapia_intensiva,
         max: maxIngressi_terapia_intensiva
      },
      variazioni_totale_positivi: {
         min: minVariazioni_totale_positivi,
         max: maxVariazioni_totale_positivi
      }
   };
   return covid19Calculated;
};

const covid19Interval = covid19 => {
   const
      nuovi_positiviDiff = (covid19.nuovi_positivi.max - covid19.nuovi_positivi.min),
      ingressi_terapia_intensivaDiff = (covid19.ingressi_terapia_intensiva.max - covid19.ingressi_terapia_intensiva.min),
      variazioni_totale_positiviDiff = (covid19.variazioni_totale_positivi.max - covid19.variazioni_totale_positivi.min);
   const interval = {
      nuovi_positivi: nuovi_positiviDiff,
      ingressi_terapia_intensiva: ingressi_terapia_intensivaDiff,
      variazioni_totale_positivi: variazioni_totale_positiviDiff
   };
   return interval;
};

Array.prototype.sum = function () {
   const intArr = this.map(elem => parseInt(elem));
   const sum = intArr.reduce((a, b) => ((a + b)));
   return sum;
};

const covid19Total = () => {
   const
      nuovi_positiviSum = nuovi_positivi.sum(),
      ingressi_terapia_intensivaSum = ingressi_terapia_intensiva.sum(),
      variazioni_totale_positiviSum = variazioni_totale_positivi.sum();
   const total = {
      nuovi_positivi: nuovi_positiviSum,
      ingressi_terapia_intensiva: ingressi_terapia_intensivaSum,
      variazioni_totale_positivi: variazioni_totale_positiviSum
   };
   return total;
};

const tooltipID = 'min-max';

const BgInfo = 'bg-info';

export default calculate;

export {
   arrayFetch,
   covid19Interval,
   covid19Total,
   tooltipID,
   BgInfo
};