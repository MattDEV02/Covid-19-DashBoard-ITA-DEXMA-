import React from 'react';
import { formatData, percentuale } from './js/table_data/utils';
import './css/table_data/index.css';

class RowData extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      const formattedData = formatData(covid19.data);
      const rapporto = percentuale(covid19.nuovi_positivi, covid19.tamponi);
      return (
         <tr key={covid19.data}>
            <td>{formattedData}</td>
            <td>{covid19.deceduti}</td>
            <td>{covid19.dimessi_guariti}</td>
            <td>{covid19.totale_positivi}</td>
            <td>{covid19.nuovi_positivi}</td>
            <td>{covid19.tamponi}</td>
            <td className='bg-info'>{(rapporto + ' %')}</td>
         </tr>
      );
   }
}

export default RowData;