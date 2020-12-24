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
            <div className="row justify-content-center">
               <h1 className='text-danger'>Hover an Italian Region
                  <i className='fas fa-pizza-slice ml-3'></i>
               </h1>
            </div>
            <div className='mt-3'>
               <Chart
                  height={options.height}
                  chartType={options.type}
                  data={mapData}
                  options={options}
               />
            </div>
         </div>
      );
   }
}

export default Map;