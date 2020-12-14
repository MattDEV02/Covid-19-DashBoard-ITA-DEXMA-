import React from 'react';
import { Bar } from 'react-chartjs-2';


class BarChart extends React.Component {
   render() {
      const data = {
         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
         datasets: [
            {
               label: 'My First dataset',
               fill: true,
               lineTension: 0.1,
               backgroundColor: 'rgba(,192,192,0.4)',
               borderColor: 'rgba(75,192,192,1)',
               borderCapStyle: 'butt',
               borderDashOffset: 0.0,
               pointBorderColor: 'rgba(75,192,192,1)',
               pointBackgroundColor: '#fff',
               pointBorderWidth: 1,
               pointHoverRadius: 5,
               pointHoverBackgroundColor: 'rgba(75,192,192,1)',
               pointHoverBorderColor: 'rgba(220,220,220,1)',
               pointHoverBorderWidth: 2,
               pointRadius: 1,
               pointHitRadius: 10,
               data: [1,2,4,5]
            }
         ]
      };
      return (
         <React.StrictMode>
            <div className='col-12 bg-dark'>
               <Bar data={data}/>
            </div>
         </React.StrictMode>
      );
   }
}

export default BarChart;