const
   protocol = 'http',
   host = '127.0.0.1',
   port = 8080,
   route = '/covid19/backend/'

const endPoint = String(protocol + '://' + host + ':' + port + route);

const endPointRegioni = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json';

const errorMsg = 'CONNECTION ERROR , Impossibile caricare l\'Output / aggiornare lo State.';

const isValidData = data => {
   const result = (data !== null && data !== undefined && data !== '');
   return result;
}

export default endPoint;

export {
   endPointRegioni,
   isValidData,
   errorMsg
};

/*
   sarebbe stato meglio impostare la porta 80 visto che è la porta standard del protocollo HTTP ma
   Xampp non me l'ha fatta impostare.
*/