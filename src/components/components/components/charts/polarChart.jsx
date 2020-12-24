import React from 'react';
import { Polar } from 'react-chartjs-2';

class PolarChart extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const config = this.props.config;
      return (
         <Polar
            data={config.data}
            options={config.options}
            height={config.height}
         />
      );
   }
}

export default PolarChart;