import React from 'react';
import ReactTooltip from 'react-tooltip';
import RowsCalcoli from './components/rowsCalcoli';
import calculate, { tooltipID } from './js/table_calcoli/index';
import { tables, calculator } from './js/table_data/index';


let covid19Calculated = null;

class TableCalcoli extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      covid19Calculated = calculate(covid19);
      return (
         <div className='col-xs-12 col-sm-12 col-md-12 col-lg-11 col-xl-9 mt-4'>
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
                        <th>Incremento<i className={calculator}></i></th>
                     </tr>
                  </thead>
                  <tbody>
                     <RowsCalcoli
                        covid19={covid19}
                        dati={covid19Calculated}
                     />
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default TableCalcoli;

