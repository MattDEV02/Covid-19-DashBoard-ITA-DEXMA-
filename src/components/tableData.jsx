import React from 'react';
import Row from './row';
import './css/table_data/index.css';


class TableData extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.data;
      return (
         <div className='col-xs-12 col-sm-12 col-md-12 col-lg-11 col-xl-10 mt-4'>
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
                        covid19.map(row => <Row covid19={row} key={row.data} />)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default TableData;