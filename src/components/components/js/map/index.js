const colorAxis = {
   colors: ['#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026']
};

const options = {
   type: 'GeoChart',
   height: '88vh',
   region: 'IT',
   resolution: 'provinces',
   colorAxis: colorAxis,
   backgroundColor: '#272727',
   datalessRegionColor: 'transparent',
};

const adjustDatiRegioni = regioni => {
   const index = 11;
   const datiTrentino = regioni[index].nuovi_positivi;
   regioni.splice(index, 1);
   return datiTrentino;
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