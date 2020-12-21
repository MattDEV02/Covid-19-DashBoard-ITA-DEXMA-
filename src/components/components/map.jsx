import React from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import endPoint, { options } from './js/map/utils';


let regioni = null;
class Map extends React.Component {
   constructor(props) {
      super(props);
      this.state = { regioni: regioni };
   }
   componentDidMount() {
      axios.get(endPoint)
         .then(response => regioni = response.data)
         .catch(error => console.error(error))
         .then(() => this.setState({ regioni: regioni }));
   }
   render() {
      return (
         <div className='col-12 mt-5'>
            {
               this.state.regioni ? <Chart
                  chartType='GeoChart'
                  data={[
                     ['City', 'Positivi'],
                  ]}
                  options={options}
               /> : null
            }
         </div>
      );
   }
}

export default Map;