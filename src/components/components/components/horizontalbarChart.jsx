import React from 'react';
import {  HorizontalBar } from 'react-chartjs-2';


class HorizontalBarChart extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const config = this.props.config;
      return (
         <HorizontalBar data={config.data} options={config.options} height={config.height}/>
      );
   }
}

export default HorizontalBarChart;