import React from 'react';
import { Doughnut } from 'react-chartjs-2';


class DoughnutChart extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const config = this.props.config;
      return (
         <Doughnut
            data={config.data}
            options={config.options}
            height={config.height}
         />
      );
   }
}

export default DoughnutChart;