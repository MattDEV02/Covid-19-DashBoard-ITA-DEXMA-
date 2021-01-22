import Covid19, {
   MinMax,
   getMin_or_Max,
   randomColor,
} from './utils';
import {
   formatData
} from '../table_data/index';


let
   nuovi_positivi = [],
   ingressi_terapia_intensiva = [],
   variazioni_totale_positivi = [],
   date = [],
   colors = [];

const tipologie = [
   'Nuovi Positivi',
   'Ingressi in Terapia Intensiva',
   'Variazione Totale Positivi'
];

const arrayFetch = dati => {
   if (nuovi_positivi.length === 0) {
      dati.map(row => {
         const
            formattedData = formatData(row.data),
            color = randomColor();
         nuovi_positivi.push(row.nuovi_positivi);
         ingressi_terapia_intensiva.push(row.ingressi_terapia_intensiva);
         variazioni_totale_positivi.push(row.variazione_totale_positivi);
         date.push(formattedData);
         colors.push(color);
      });
   }
   const covid19 = new Covid19(
      nuovi_positivi,
      ingressi_terapia_intensiva,
      variazioni_totale_positivi,
      date
   );
   return covid19;
};

const calculateMinMax = covid19 => {
   arrayFetch(covid19);
   const isMinValue = true;
   const
      minNuovi_positivi = getMin_or_Max(nuovi_positivi, isMinValue),
      maxNuovi_positivi = getMin_or_Max(nuovi_positivi),
      minIngressi_terapia_intensiva = getMin_or_Max(ingressi_terapia_intensiva, isMinValue),
      maxIngressi_terapia_intensiva = getMin_or_Max(ingressi_terapia_intensiva),
      minVariazioni_totale_positivi = getMin_or_Max(variazioni_totale_positivi, isMinValue),
      maxVariazioni_totale_positivi = getMin_or_Max(variazioni_totale_positivi);
   const
      nuovi_positiviMinMax = new MinMax(
         minNuovi_positivi,
         maxNuovi_positivi
      ),
      ingressi_terapia_intensivaMinMax = new MinMax(
         minIngressi_terapia_intensiva,
         maxIngressi_terapia_intensiva
      ),
      variazioni_totale_positiviMinMax = new MinMax(
         minVariazioni_totale_positivi,
         maxVariazioni_totale_positivi
      );
   const covid19MinMax = new Covid19(
      nuovi_positiviMinMax,
      ingressi_terapia_intensivaMinMax,
      variazioni_totale_positiviMinMax
   );
   return covid19MinMax;
};

const covid19Interval = covid19 => {
   const
      nuovi_positiviDiff = covid19.nuovi_positivi.getInteval(),
      ingressi_terapia_intensivaDiff = covid19.ingressi_terapia_intensiva.getInteval(),
      variazioni_totale_positiviDiff = covid19.variazioni_totale_positivi.getInteval();
   const interval = new Covid19(
      nuovi_positiviDiff,
      ingressi_terapia_intensivaDiff,
      variazioni_totale_positiviDiff
   );
   return interval;
};

const covid19Total = () => {
   const
      nuovi_positiviSum = nuovi_positivi.sum(),
      ingressi_terapia_intensivaSum = ingressi_terapia_intensiva.sum(),
      variazioni_totale_positiviSum = variazioni_totale_positivi.sum();
   const total = new Covid19(
      nuovi_positiviSum,
      ingressi_terapia_intensivaSum,
      variazioni_totale_positiviSum
   );
   return total;
};

const covid19Media = (num, total) => {
   let media = {};
   for (const property in total) { // for property in Object...
      const result = (total[property] / num);
      const result_fixed = result.toFixed(2);
      media[property] = result_fixed;
   }
   return media;
};

const covid19Increment = () => {
   const
      nuovi_positiviIncrement = nuovi_positivi.getIncrement(),
      ingressi_terapia_intensivaIncrement = ingressi_terapia_intensiva.getIncrement(),
      variazioni_totale_positiviIncrement = variazioni_totale_positivi.getIncrement();
   const increment = new Covid19(
      nuovi_positiviIncrement,
      ingressi_terapia_intensivaIncrement,
      variazioni_totale_positiviIncrement
   );
   return increment;
};

const tooltipID = 'tooltip-calcoli';

const BgInfo = 'bg-info';


export default calculateMinMax;

export {
   arrayFetch,
   covid19Interval,
   covid19Total,
   covid19Media,
   covid19Increment,
   tipologie,
   tooltipID,
   BgInfo,
   colors
};