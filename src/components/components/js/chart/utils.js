const colors = {
   darkred: '#8b0000',
   gold: '#d4af37',
   white: '#ffffff'
};

const title = 'Andamento Curva Nuovi Positivi Covid19 Italia';

const data = {
   datasets: [{
      label: 'Nuovi Positivi',
      backgroundColor: colors.darkred,
      borderColor: colors.gold,
      borderWidth: 0.5,
      pointBackgroundColor: colors.gold,
      pointRadius: 3,
   }]
};

const options = {
   legend: {
      labels: {
         fontColor: colors.white,
         fontSize: 14,
      }
   },
   title: {
      display: true,
      text: title, //...
   }
};

const height = 141;

const config = {
   data: data,
   options: options,
   height: height
};

const setConfig = dati => {
   config.data.labels = dati.date;
   config.data.datasets[0].data = dati.nuovi_positivi;
   return config;
};

const type = { // Like an Enum
   line: 'line',
   bar: 'bar',
   horizontalBar: 'horizontal-bar'
};

const tooltipID = 'select-chart-type';

export default config;

export {
   setConfig,
   colors,
   type,
   tooltipID
};