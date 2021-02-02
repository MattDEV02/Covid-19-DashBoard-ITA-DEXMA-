import adjustDatiRegioni, {
   colorAxis
} from './utils';


const options = {
   type: 'GeoChart',
   height: '88vh',
   region: 'IT',
   resolution: 'provinces',
   colorAxis,
   backgroundColor: '#272727',
   datalessRegionColor: 'transparent',
};

const getMapData = regioni => {
   let covid19Regioni = [
      ['City', 'Positivi']
   ];
   const datiTrentino = adjustDatiRegioni(regioni);
   regioni.map(regione => {
      let
         nome_regione = regione.denominazione_regione,
         nuovi_positivi_regione = regione.nuovi_positivi;
      if (nome_regione.includes('Friuli'))
         nome_regione = 'Friuli-Venezia Giulia';
      else if (nome_regione.includes('Trento')) {
         nome_regione = 'Trentino-Alto Adige';
         nuovi_positivi_regione += datiTrentino;
      }
      const covid19Regione = [nome_regione, nuovi_positivi_regione];
      covid19Regioni.push(covid19Regione);
   });
   return covid19Regioni;
};


export default options;

export {
   getMapData
};