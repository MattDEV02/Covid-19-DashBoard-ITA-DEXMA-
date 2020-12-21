const colors = {
   colors: ['#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026']
};

const options = {
   region: 'IT',
   resolution: 'provinces',
   colorAxis: colors,
   backgroundColor: '#272727',
   datalessRegionColor: 'transparent',
};

const endPoint = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json';

export default endPoint;

export {
   options
};