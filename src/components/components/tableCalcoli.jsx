import React from 'react';
import ReactTooltip from 'react-tooltip';
import RowsCalcoli from './components/rowsCalcoli';
import calculateMinMax, { tooltipID } from './js/table_calcoli/index';
import tables, { calculator } from './js/table_data/index';


class TableCalcoli extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      const days = covid19.length;
      const covid19MinMax = calculateMinMax(covid19);
      return (
         <div className='col-md-12 col-lg-11 col-xl-9 mt-4'>
            <div className={tables.row}>
               <table className={tables.tab} data-tip='' data-for={tooltipID}>
                  <ReactTooltip id={tooltipID} place='right'>
                     Questa Tabella riporta alcune stime aritmetiche sui Dati del Covid19 Relativi agli ultimi 10 Giorni
                  </ReactTooltip>
                  <thead>
                     <tr>
                        <th>Tipologia</th>
                        <th>Minimo</th>
                        <th>Massimo</th>
                        <th>
                           Intervallo
                           <i className={calculator}></i>
                        </th>
                        <th>
                           Media
                           <i className={calculator}></i>
                        </th>
                        <th>
                           Totale
                           <i className={calculator}></i>
                        </th>
                        <th>
                           Incremento
                           <i className={calculator}></i>
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <RowsCalcoli
                        days={days}
                        dati={covid19MinMax}
                     />
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default TableCalcoli;

