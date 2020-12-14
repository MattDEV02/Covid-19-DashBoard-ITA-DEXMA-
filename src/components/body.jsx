import React from 'react';
import TableData from './components/tableData';
import TableMinMax from './components/tableMinMax';


class Body extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      return (
         <React.StrictMode>
            <TableData covid19={covid19} />
            <TableMinMax covid19={covid19} />
         </React.StrictMode>
      );
   }
}

export default Body;