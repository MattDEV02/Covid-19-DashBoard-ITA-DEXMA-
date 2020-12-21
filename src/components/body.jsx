import React from 'react';
import TableData from './components/tableData';
import TableMinMax from './components/tableMinMax';
import Chart from './components/chart';
import Calendar from './components/calendar';
import Map from './components/map';


class Body extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const
         covid19 = this.props.covid19,
         covid19Regioni = null;
      return (
         <React.StrictMode>
            <TableData covid19={covid19} />
            <TableMinMax covid19={covid19} />
            <Chart covid19={covid19} />
            <Calendar covid19={covid19} />
            <Map covid19Regioni={covid19Regioni} />
         </React.StrictMode>
      );
   }
}

export default Body;