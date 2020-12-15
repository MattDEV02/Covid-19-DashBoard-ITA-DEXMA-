import React from 'react';
import { Bar } from 'react-chartjs-2';


class BarChart extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const config = this.props.config;
      return (
         <Bar data={config.data} options={config.options} height={config.height}/>
      );
   }
}

export default BarChart;