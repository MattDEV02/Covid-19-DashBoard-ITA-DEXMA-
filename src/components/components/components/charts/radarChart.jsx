import React from 'react';
import { Radar } from 'react-chartjs-2';


class RadarChart extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const config = this.props.config;
      return (
         <Radar data={config.data} options={config.options} height={config.height}/>
      );
   }
}

export default RadarChart;