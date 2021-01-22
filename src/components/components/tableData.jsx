import React from 'react';
import ReactTooltip from 'react-tooltip';
import RowData from './components/rowData';
import tables, {
   tooltipID,
   calculator
} from './js/table_data/index';
import './css/tables/index.css';


class TableData extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      return (
         <div className='col-md-12 col-lg-11 col-xl-10 mt-5'>
            <div className={tables.row}>
               <ReactTooltip id={tooltipID}>Questa Tabella riporta alcuni Dati sul Covid19 Relativi agli ultimi 10 Giorni</ReactTooltip>
               <table className={tables.tab} data-tip='' data-for={tooltipID}>
                  <thead>
                     <tr>
                        <th>Data</th>
                        <th>Decessi Tot</th>
                        <th>Dimessi Guariti Tot</th>
                        <th>Positivi</th>
                        <th>Positivi Tot</th>
                        <th>Tamponi</th>
                        <th>Tamponi Tot</th>
                        <th>Rapporto<i className={calculator}></i></th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        covid19.map(row =>
                           <RowData
                              covid19={row}
                              key={row.data}
                           />
                        )
                     }
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default TableData;
