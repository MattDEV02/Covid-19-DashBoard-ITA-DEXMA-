import React from 'react';
import { Chart } from 'react-google-charts';
import options from './js/map/utils';


class Map extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   componentDidMount() {

   }
   render() {
      return (
         <div className='col-12 mt-5'>
            <Chart
               chartType='GeoChart'
               data={[
                  ['City', 'Positivi'],
               ]}
               options={options}
            />
         </div>
      );
   }
}

export default Map;