import React from 'react';
import { Chart } from 'react-google-charts';
import options, { getMapData } from './js/map/utils';



const data = [
   ['City', 'Positivi'],
   ['Abruzzo', 216],
   ["Basilicata", 500],
   ['Calabria', 1000],
   ["Campania", 3000],
   ['Emilia-Romagna', 1760],
   ['Friuli-Venezia Giulia', 658],
   ['Lazio', 2000],
   ["Liguria", 285],
   ['Lombardia', 4000],
   ["Marche", 400],
   ['Molise', 62],
   ['Trentino-Alto Adige', 2500],
   ['Piemonte', 3550],
   ['Puglia', 400],
   ['Sardegna', 311],
   ['Sicilia', 792],
   ['Toscana', 483],
   ['Umbria', 113],
   ["Valle d'Aosta", 22],
   ['Veneto', 3869]
];

class Map extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const regioni = this.props.regioni;
      const mapData = getMapData(regioni);
      return (
         <div className='col-12 mt-5'>
            <Chart
               height={'100vh'}
               chartType={options.type}
               data={mapData}
               options={options}
            />
         </div>
      );
   }
}

export default Map;