import React from 'react';
import { formatData, percentuale } from '../js/table_data/index';
import { BgInfo } from '../js/table_calcoli/index';

class RowData extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      const formattedData = formatData(covid19.data);
      const rapporto = percentuale(covid19.nuovi_positivi, covid19.tamponi_giornalieri);
      return (
         <tr key={covid19.data}>
            <td>{formattedData}</td>
            <td>{covid19.deceduti}</td>
            <td>{covid19.dimessi_guariti}</td>
            <td>{covid19.nuovi_positivi}</td>
            <td>{covid19.totale_positivi}</td>
            <td>{covid19.tamponi_giornalieri}</td>
            <td>{covid19.tamponi}</td>
            <td className={BgInfo}>{`${rapporto} %`}</td>
         </tr>
      );
   }
}

export default RowData;