import React from 'react';
import { covid19Interval, covid19Total, covid19Media, covid19Increment, BgInfo } from '../js/table_calcoli/index';


class RowsCalcoli extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const
         num = this.props.covid19.length,
         covid19Calculated = this.props.dati;
      const
         interval = covid19Interval(covid19Calculated),
         total = covid19Total(),
         media = covid19Media(num, total),
         increment = covid19Increment();
      return (
         <React.StrictMode>
            <tr>
               <td>Nuovi Positivi</td>
               <td>{covid19Calculated.nuovi_positivi.min}</td>
               <td>{covid19Calculated.nuovi_positivi.max}</td>
               <td className={BgInfo}>{interval.nuovi_positivi}</td>
               <td className={BgInfo}>{media.nuovi_positivi}</td>
               <td className={BgInfo}>{total.nuovi_positivi}</td>
               <td className={BgInfo}>{increment.nuovi_positivi}</td>
            </tr>
            <tr>
               <td>Ingressi in Terapia Intensiva</td>
               <td>{covid19Calculated.ingressi_terapia_intensiva.min}</td>
               <td>{covid19Calculated.ingressi_terapia_intensiva.max}</td>
               <td className={BgInfo}>{interval.ingressi_terapia_intensiva}</td>
               <td className={BgInfo}>{media.ingressi_terapia_intensiva}</td>
               <td className={BgInfo}>{total.ingressi_terapia_intensiva}</td>
               <td className={BgInfo}>{increment.ingressi_terapia_intensiva}</td>
            </tr>
            <tr>
               <td>Variazione Totale Positivi</td>
               <td>{covid19Calculated.variazioni_totale_positivi.min}</td>
               <td>{covid19Calculated.variazioni_totale_positivi.max}</td>
               <td className={BgInfo}>{interval.variazioni_totale_positivi}</td>
               <td className={BgInfo}>{media.variazioni_totale_positivi}</td>
               <td className={BgInfo}>{total.variazioni_totale_positivi}</td>
               <td className={BgInfo}>{increment.variazioni_totale_positivi}</td>
            </tr>
         </React.StrictMode>
      );
   }
}

export default RowsCalcoli;