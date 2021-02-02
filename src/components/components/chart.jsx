import React from 'react';
import ReactTooltip from 'react-tooltip';
import BarChart from './components/charts/barChart';
import HorizontalBarChart from './components/charts/horizontalbarChart';
import LinearChart from './components/charts/linearChart';
import RadarChart from './components/charts/radarChart';
import PieChart from './components/charts/pieChart';
import DoughnutChart from './components/charts/doughnutChart';
import PolarChart from './components/charts/polarChart';
import config, {
   setConfig,
   isMulticolor,
   type,
   initialState,
   tooltipID,
   default_colors
} from './js/chart';
import {
   arrayFetch,
   colors
} from './js/table_calcoli';
import './css/chart/index.css';



class Chart extends React.Component {
   constructor(props) {
      super(props);
      this.state = initialState;
   }
   render() {
      const stateType = this.state.type;
      const covid19 = this.props.covid19;
      const dati = arrayFetch(covid19);
      setConfig(dati);
      return (
         <React.StrictMode>
            <div className='col-12 mt-5' id='chart-container'>
               <div className='row'>
                  <ReactTooltip id={tooltipID} textColor={default_colors.gold} backgroundColor={default_colors.darkred} place='top'>
                     Cambia il Tipo di Grafico !
                  </ReactTooltip>
                  <select className='form-control-sm' onChange={e => this.handleSelect(e)} data-tip='' data-for={tooltipID}>
                     <option value={type.bar}>Barre Verticali</option>
                     <option value={type.horizontalBar}>Barre Orizzontali</option>
                     <option value={type.line}>Lineare</option>
                     <option value={type.radar}>Radar</option>
                     <option value={type.pie}>Torta</option>
                     <option value={type.doughnut}>Ciambella</option>
                     <option value={type.polar}>Polare</option>
                  </select>
                  {
                     stateType === type.bar ? <BarChart config={config} /> :
                        stateType === type.horizontalBar ? <HorizontalBarChart config={config} /> :
                           stateType === type.line ? <LinearChart config={config} /> :
                              stateType === type.radar ? <RadarChart config={config} /> :
                                 stateType === type.pie ? <PieChart config={config} /> :
                                    stateType === type.doughnut ? <DoughnutChart config={config} /> :
                                       <PolarChart config={config} />
                  }
               </div>
            </div>
         </React.StrictMode>
      );
   }
   handleSelect(e) {
      const type = e.target.value;
      let datasets = config.data.datasets[0];
      datasets.backgroundColor = isMulticolor(type) ? colors : default_colors.darkred;
      const setType = { type };
      this.setState(setType);
   }
}

export default Chart;