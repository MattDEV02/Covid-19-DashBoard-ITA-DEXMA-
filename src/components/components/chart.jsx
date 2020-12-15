import React from 'react';
import { arrayFetch } from './js/table_min_max/utils';
import BarChart from './components/barChart';
import config, { setConfig } from './js/chart/utils';
import './css/chart/index.css';

class Chart extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      const dati = arrayFetch(covid19);
      setConfig(dati)
      return (
         <React.StrictMode>
            <div className='col-12 mt-5 mb-1' id='chart-container'>
               <BarChart config={config} />
            </div>
         </React.StrictMode>
      );
   }
}

export default Chart;