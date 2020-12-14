import React from 'react';
import RowData from './rowData';
import './css/table_data/index.css';


class TableData extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      return (
         <div className='col-xs-12 col-sm-12 col-md-12 col-lg-11 col-xl-10 mt-5'>
            <div className='row justify-content-center table-responsive-sm'>
               <table className='table table-hover text-center font-weight-bold'>
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