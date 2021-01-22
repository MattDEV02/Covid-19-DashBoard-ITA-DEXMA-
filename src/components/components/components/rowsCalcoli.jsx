import React from 'react';
import {
   covid19Interval,
   covid19Total,
   covid19Media,
   covid19Increment,
   tipologie,
   BgInfo
} from '../js/table_calcoli/index';


class RowsCalcoli extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const props = this.props;
      const
         days = props.days,
         covid19MinMax = props.dati;
      const
         interval = covid19Interval(covid19MinMax),
         total = covid19Total(),
         media = covid19Media(days, total),
         increment = covid19Increment();
      const
         nuovi_positivi = covid19MinMax.nuovi_positivi,
         ingressi_terapia_intensiva = covid19MinMax.ingressi_terapia_intensiva,
         variazioni_totale_positivi = covid19MinMax.variazioni_totale_positivi;
      return (
         <React.StrictMode>
            <tr>
               <td>{tipologie[0]}</td>
               <td>{nuovi_positivi.min}</td>
               <td>{nuovi_positivi.max}</td>
               <td className={BgInfo}>{interval.nuovi_positivi}</td>
               <td className={BgInfo}>{media.nuovi_positivi}</td>
               <td className={BgInfo}>{total.nuovi_positivi}</td>
               <td className={BgInfo}>{increment.nuovi_positivi}</td>
            </tr>
            <tr>
               <td>{tipologie[1]}</td>
               <td>{ingressi_terapia_intensiva.min}</td>
               <td>{ingressi_terapia_intensiva.max}</td>
               <td className={BgInfo}>{interval.ingressi_terapia_intensiva}</td>
               <td className={BgInfo}>{media.ingressi_terapia_intensiva}</td>
               <td className={BgInfo}>{total.ingressi_terapia_intensiva}</td>
               <td className={BgInfo}>{increment.ingressi_terapia_intensiva}</td>
            </tr>
            <tr>
               <td>{tipologie[2]}</td>
               <td>{variazioni_totale_positivi.min}</td>
               <td>{variazioni_totale_positivi.max}</td>
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