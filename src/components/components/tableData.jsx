import React from 'react';
import ReactTooltip from 'react-tooltip';
import RowData from './components/rowData';
import { tables , tooltipID } from './js/table_data/utils';
import './css/table_data/index.css';


class TableData extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      return (
         <div className='col-xs-12 col-sm-12 col-md-11 col-lg-11 col-xl-10 mt-5'>
            <div className={tables.row}>
               <table className={tables.tab} data-tip='' data-for={tooltipID}>
               <ReactTooltip id={tooltipID}>Questa Tabella riporta alcuni Dati sul Covid19 Relativi agli ultimi 10 Giorni</ReactTooltip>
                  <thead>
                     <tr>
                        <th>Data</th>
                        <th>Decessi Tot.</th>
                        <th>Dimessi Guariti Tot.</th>
                        <th>Positivi Tot.</th>
                        <th>Nuovi Positivi</th>
                        <th>Tamponi Tot.</th>
                        <th>Rapporto %</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        covid19.map(row => <RowData covid19={row} key={row.data} />)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default TableData;