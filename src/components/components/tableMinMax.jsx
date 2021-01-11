import React from 'react';
import ReactTooltip from 'react-tooltip';
import RowMinMax from './components/rowsMinMax';
import calculate, { tooltipID } from './js/table_min_max/index';
import { tables, calculator } from './js/table_data/index';


let covid19Calculated = null;
class TableMinMax extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      covid19Calculated = calculate(covid19);
      return (
         <div className='col-xs-12 col-sm-12 col-md-11 col-lg-9 col-xl-7 mt-4'>
            <div className={tables.row}>
               <table className={tables.tab} data-tip='' data-for={tooltipID}>
                  <ReactTooltip id={tooltipID} place='right'>Questa Tabella riporta alcune stime aritmetiche sui Dati del Covid19 Relativi agli ultimi 10 Giorni</ReactTooltip>
                  <thead>
                     <tr>
                        <th>Tipologia</th>
                        <th>Minimo</th>
                        <th>Massimo</th>
                        <th>Intervallo<i className={calculator}></i></th>
                        <th>Media<i className={calculator}></i></th>
                        <th>Totale<i className={calculator}></i></th>
                     </tr>
                  </thead>
                  <tbody>
                     <RowMinMax
                        dati={covid19Calculated}
                     />
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