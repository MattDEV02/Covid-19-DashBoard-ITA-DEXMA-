import React from 'react';
import ReactTooltip from 'react-tooltip';
import BarChart from './components/charts/barChart';
import HorizontalBarChart from './components/charts/horizontalbarChart';
import LinearChart from './components/charts/linearChart';
import RadarChart from './components/charts/radarChart';
import PieChart from './components/charts/pieChart';
import DoughnutChart from './components/charts/doughnutChart';
import PolarChart from './components/charts/polarChart';
import config, { setConfig, isMulticolor, type, tooltipID, default_colors } from './js/chart/utils';
import { arrayFetch, colors } from './js/table_min_max/utils';
import './css/chart/index.css';



class Chart extends React.Component {
   constructor(props) {
      super(props);
      this.state = { type: type.bar };
   }
   render() {
      const covid19 = this.props.covid19;
      const dati = arrayFetch(covid19);
      setConfig(dati);
      const type = this.state.type;
      return (
         <React.StrictMode>
            <div className='col-12 mt-5' id='chart-container'>
               <div className='row'>
                  <ReactTooltip id={tooltipID} place='top' textColor={default_colors.gold} backgroundColor={default_colors.darkred}>
                     Cambia il Tipo di Grafico !
                  </ReactTooltip>
                  <select className='form-control-sm' onChange={e => this.handleSelect(e)} data-tip='' data-for={tooltipID}>
                     <option value='bar'>Barre Verticali</option>
                     <option value='horizontal-bar'>Barre Orizzontali</option>
                     <option value='line'>Lineare</option>
                     <option value='radar'>Radar</option>
                     <option value='pie'>Torta</option>
                     <option value='doughnut'>Ciambella</option>
                     <option value='polar'>Polare</option>
                  </select>
                  {
                     type === 'bar' ? <BarChart config={config} /> :
                        type === 'horizontal-bar' ? <HorizontalBarChart config={config} /> :
                           type === 'line' ? <LinearChart config={config} /> :
                              type === 'radar' ? <RadarChart config={config} /> :
                                 type === 'pie' ? <PieChart config={config} /> :
                                    type === 'doughnut' ? <DoughnutChart config={config} /> :
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
      const setType = { type: type };
      this.setState(setType);
   }
}

export default Chart;