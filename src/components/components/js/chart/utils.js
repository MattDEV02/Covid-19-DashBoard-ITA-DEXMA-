const default_colors = {
   darkred: '#8b0000',
   gold: '#d4af37',
   white: '#ffffff'
};

const title = 'Andamento Curva Nuovi Positivi Covid19 Italia';

const getLegendFromTitle = title => {
   let legend = title.replace('Andamento Curva ', '');
   legend = legend.replace(' Covid19 Italia', '');
   return legend;
};

const legend = getLegendFromTitle(title);

const data = {
   datasets: [{
      label: legend,
      backgroundColor: default_colors.darkred,
      borderColor: default_colors.gold,
      borderWidth: 0.5,
      pointBackgroundColor: default_colors.gold,
      pointRadius: 3,
   }]
};

const options = {
   legend: {
      labels: {
         fontColor: default_colors.white,
         fontSize: 14,
      }
   },
   title: {
      display: true,
      text: title,
   }
};

const height = 141;

const config = {
   data: data,
   options: options,
   height: height
};

const setConfig = dati => {
   let
      labels = dati.date,
      data = dati.nuovi_positivi;
   config.data.labels = labels;
   config.data.datasets[0].data = data;
   return config;
};

const type = {  // Like an Enum...
   line: 'line',
   bar: 'bar',
   horizontalBar: 'horizontal-bar',
   radar: 'radar',
   pie: 'pie',
   doughnut: 'doughnut',
   polar: 'polar'
};

const isMulticolor = type => {
   const result = (type === 'pie' || type === 'doughnut' || type === 'polar');
   return result;
}

const tooltipID = 'select-chart-type';

export default config;

export {
   setConfig,
   isMulticolor,
   default_colors,
   type,
   tooltipID
};