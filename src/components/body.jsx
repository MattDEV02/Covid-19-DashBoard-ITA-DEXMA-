import React from 'react';
import TableData from './components/tableData';
import TableCalcoli from './components/tableCalcoli';
import Chart from './components/chart';
import Calendar from './components/calendar';
import Map from './components/map';
import Return from './components/return';


class Body extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const { covid19, regioni } = this.props;
      return (
         <React.StrictMode>
            <TableData covid19={covid19} />
            <TableCalcoli covid19={covid19} />
            <Chart covid19={covid19} />
            <Calendar covid19={covid19} />
            <Map regioni={regioni} />
            <Return />
         </React.StrictMode>
      );
   }
}

export default Body;