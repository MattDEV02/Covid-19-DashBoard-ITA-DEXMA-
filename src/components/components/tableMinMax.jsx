import React from 'react';
import calculate from './js/table_min_max/utils';

class TableMinMax extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      const covid19Calculated = calculate(covid19);
      console.log(covid19Calculated);
      return (
         <div className=''>
            <div>
            </div>
         </div>
      );
   }
}

export default TableMinMax;