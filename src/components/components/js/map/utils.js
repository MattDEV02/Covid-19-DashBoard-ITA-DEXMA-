const colorAxis = {
   colors: [
      '#FED976',
      '#FEB24C',
      '#FD8D3C',
      '#FC4E2A',
      '#E31A1C',
      '#BD0026',
      '#800026'
   ]
};

const adjustDatiRegioni = regioni => {
   const index = 11;
   const datiTrentino = regioni[index].nuovi_positivi;
   regioni.splice(index, 1);
   return datiTrentino;
};


export default adjustDatiRegioni;

export {
   colorAxis
};