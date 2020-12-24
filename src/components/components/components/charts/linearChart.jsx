import React from 'react';
import { Line } from 'react-chartjs-2';


class LinearChart extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const config = this.props.config;
      return (
         <Line
            data={config.data}
            options={config.options}
            height={config.height}
         />
      );
   }
}

export default LinearChart;