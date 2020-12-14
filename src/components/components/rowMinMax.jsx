import React from 'react';
import { Covid19Interval } from './js/table_min_max/utils';


class RowMinMax extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19Calculated = this.props.dati;
      const interval = Covid19Interval(covid19Calculated);
      console.log(interval);
      return (
         <React.StrictMode>
            <tr>
               <td>Nuovi Positivi</td>
               <td>{covid19Calculated.nuovi_positivi.min}</td>
               <td>{covid19Calculated.nuovi_positivi.max}</td>
               <td>{interval.nuovi_positivi}</td>
            </tr>
            <tr>
               <td>Ingressi in Terapia Intensiva</td>
               <td>{covid19Calculated.ingressi_terapia_intensiva.min}</td>
               <td>{covid19Calculated.ingressi_terapia_intensiva.max}</td>
               <td>{interval.ingressi_terapia_intensiva}</td>
            </tr>
            <tr>
               <td>Variazione Totale Positivi</td>
               <td>{covid19Calculated.variazioni_totale_positivi.min}</td>
               <td>{covid19Calculated.variazioni_totale_positivi.max}</td>
               <td>{interval.variazioni_totale_positivi}</td>
            </tr>
         </React.StrictMode>
      );
   }
}

export default RowMinMax;