import React from 'react';
import { Chart } from 'react-google-charts';
import options, { getMapData } from './js/map/utils';



class Map extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const regioni = this.props.regioni;
      const mapData = getMapData(regioni);
      return (
         <div className='col-12 mt-5'>
            <Chart
               height={'100vh'}
               chartType={options.type}
               data={mapData}
               options={options}
            />
         </div>
      );
   }
}

export default Map;