import React from 'react';
import ReactTooltip from 'react-tooltip';
import RowMinMax from './components/rowMinMax';
import calculate, { tooltipID } from './js/table_min_max/utils';
import { tables } from './js/table_data/utils';


let covid19Calculated = null;
class TableMinMax extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      covid19Calculated = calculate(covid19);
      return (
         <div className='col-xs-12 col-sm-10 col-md-10 col-lg-8 col-xl-6 mt-4'>
            <div className={tables.row}>
               <table className={tables.tab} data-tip='' data-for={tooltipID}>
                  <ReactTooltip id={tooltipID} place='right'>Questa Tabella riporta i Minimi e i Massimi di alcuni Dati sul Covid19 Relativi agli ultimi 10 Giorni</ReactTooltip>
                  <thead>
                     <tr>
                        <th>Tipologia</th>
                        <th>Minimo</th>
                        <th>Massimo</th>
                        <th>Intervallo</th>
                        <th>Totale</th>
                     </tr>
                  </thead>
                  <tbody>
                     <RowMinMax dati={covid19Calculated} />
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default TableMinMax;

export {
   covid19Calculated
};