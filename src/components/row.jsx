import React from 'react';
import { formatData } from './js/utils';
import './css/index.css';

class Row extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      const data = formatData(covid19.data);
      return (
         <tr key={data}>
            <td>{data}</td>
            <td>{covid19.nuovi_positivi}</td>
            <td>{covid19.tamponi}</td>
            <td>{covid19.deceduti}</td>
            <td>{covid19.dimessi_guariti}</td>
         </tr>
      );
   }
}

export default Row;