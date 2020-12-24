import React from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const config = this.props.config;
      return (
         <Pie
            data={config.data}
            options={config.options}
            height={config.height}
         />
      );
   }
}

export default PieChart;