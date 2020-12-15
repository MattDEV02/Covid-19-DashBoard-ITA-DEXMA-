import React from 'react';
import ReactTooltip from 'react-tooltip';
import BarChart from './components/barChart';
import HorizontalBarChart from './components/horizontalbarChart';
import LinearChart from './components/linearChart';
import RadarChart from './components/radarChart';
import config, { setConfig, type, tooltipID, colors } from './js/chart/utils';
import { arrayFetch } from './js/table_min_max/utils';
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
                  <ReactTooltip id={tooltipID} place='top' textColor={colors.gold} backgroundColor={colors.darkred} >Try to change Chart Type !</ReactTooltip>
                  <select className='form-control-sm' onChange={e => this.handleSelect(e)} data-tip='' data-for={tooltipID}>
                     <option value='bar'>Barre Verticali</option>
                     <option value='horizontal-bar'>Barre Orizzontali</option>
                     <option value='line'>Lineare</option>
                     <option value='radar'>Radar</option>
                  </select>
                  {
                     type === 'bar' ? <BarChart config={config} /> :
                        type === 'horizontal-bar' ? <HorizontalBarChart config={config} /> :
                           type === 'line' ? <LinearChart config={config} /> :
                              <RadarChart config={config} />
                  }
               </div>
            </div>
         </React.StrictMode>
      );
   }
   handleSelect(e) {
      const type = e.target.value;
      const setType = { type: type };
      this.setState(setType);
   }
}

export default Chart;