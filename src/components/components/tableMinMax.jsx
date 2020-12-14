import React from 'react';
import RowMinMax from './rowMinMax';
import calculate from './js/table_min_max/utils';

class TableMinMax extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      const covid19Calculated = calculate(covid19);
      return (
         <div className='col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 mt-4'>
            <div className='row table-responsive-sm'>
               <table className='table table-hover text-center font-weight-bold'>{/*exporting... */}
                  <thead>
                     <tr>
                        <th>Tipologia</th>
                        <th>Minimo</th>
                        <th>Massimo</th>
                        <th>Intervallo</th>
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