const data = {
   labels: null,
   datasets: [{
      label: 'Legenda , click there',
      fill: true,
      backgroundColor: 'darkred',
      borderColor: 'gold',
      borderWidth: 0.5,
      pointBackgroundColor: '#fff',
      pointRadius: 2,
      data: null
   }]
};
const options = {
   legend: {
      labels: {
         fontColor: 'white',
         fontSize: 14,
      },
   },
   title: {
      display: true,
      text: 'Andamento Curva Covid19 Italia',
   }
};

const config = {
   data: data,
   options: options
};

const setConfig = dati => {
   config.data.labels = dati.date;
   config.data.datasets[0].data = dati.nuovi_positivi;
   return config;
};

export default config;

export {
   setConfig
};