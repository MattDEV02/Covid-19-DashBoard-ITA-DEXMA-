import React from 'react';
import Row from './row';


class TableData extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className='col-xs-12 col-sm-12 col-md-11 col-lg-10 col-xl-8 mt-5' id='table-container'>
            <div className='row justify-content-center'>
               <table border='1' className='table table-hover text-center font-weight-bold'>
                  <thead className='bg-danger text-light'>
                     <tr>
                        <th>Data</th>
                        <th>Positivi</th>
                        <th>Tamponi</th>
                        <th>Decessi</th>
                        <th>Guariti</th>
                     </tr>
                  </thead>
                  <tbody className='bg-light' id='data-tab'>
                     {
                        this.props.data.map(row => <Row data={row} />)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default TableData;