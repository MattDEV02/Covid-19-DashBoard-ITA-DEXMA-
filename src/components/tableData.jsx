import React from 'react';
import Row from './row';
import './css/index.css';

class TableData extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.data;
      return (
         <div className='col-xs-12 col-sm-12 col-md-11 col-lg-10 col-xl-8 mt-4' id='table-container'>
            <div className='row justify-content-center'>
               <table className='table table-hover text-center font-weight-bold'>
                  <thead className='bg-danger text-light'>
                     <tr>
                        <th>Data</th>
                        <th>Positivi</th>
                        <th>Tamponi</th>
                        <th>Decessi</th>
                        <th>Dimessi Guariti</th>
                     </tr>
                  </thead>
                  <tbody className='bg-light' id='data-tab'>
                     {
                        covid19.map(row => <Row covid19={row} key={row.data}/>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default TableData;