let
   nuovi_positivi = [],
   ingressi_terapia_intensiva = [],
   variazioni_totale_positivi = [];

const calculate = covid19 => {
   covid19.map(row => {
      nuovi_positivi.push(row.nuovi_positivi);
      i9ngressi_terapia_intensiva.push(row.ingressi_terapia_intensiva);
      variazioni_totale_positivi.push(row.variazione_totale_positivi);
   });
   const
      minNuovi_positivi = Math.min(nuovi_positivi),
      maxNuovi_positivi = Math.max(nuovi_positivi),
      minIngressi_terapia_intensiva = Math.min(ingressi_terapia_intensiva),
      maxIngressi_terapia_intensiva = Math.max(ingressi_terapia_intensiva),
      minVariazioni_totale_positivi = Math.min(variazioni_totale_positivi),
      maxVariazioni_totale_positivi = Math.max(variazioni_totale_positivi);
   const covid19Calculated = {
      nuovi_positivi: {
         min: minNuovi_positivi,
         max: maxNuovi_positivi
      },
      ingressi_terapia_intensiva: {
         min: minIngressi_terapia_intensiva,
         max: maxIngressi_terapia_intensiva
      },
      variazioni_totale_positivi: {
         min: minVariazioni_totale_positivi,
         max: maxVariazioni_totale_positivi
      }
   };
   return covid19Calculated;
};

export default calculate;