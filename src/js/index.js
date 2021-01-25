import axios from 'axios';


const days = 10; // We can change this

const
   protocol = 'http',
   host = '127.0.0.1',
   port = 8080,
   route = '/covid19/backend/',
   file = 'index.php', //It Is optional
   req_parameter = `?days=${days}`;

const URL_andamento_nazionale = new String((protocol + '://' + host + ':' + port + route + file + req_parameter)); // String Casting

const URL_andamento_regioni = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json';

const isValidData = (...data) => { // destruct operator (ES6)
   let result = false;
   data.map(arg =>
      result = (
         (arg !== null) &&
         (arg !== undefined) &&
         (arg !== '') &&
         (arg !== 0) &&
         (arg !== false) &&
         (Array.isArray(data))
      )
   );
   return result;
}

const ErrMsg = 'Impossibile caricare l\'Output / Aggiornare lo State';

const
   andamentoNazionale = axios.get(URL_andamento_nazionale),
   andamentoRegioni = axios.get(URL_andamento_regioni);

const requests = [andamentoNazionale, andamentoRegioni];

export default requests;

export {
   isValidData,
   ErrMsg
};


/*
   sarebbe stato meglio impostare la porta 80 visto che è la porta standard del protocollo HTTP ma
   Xampp non me l'ha fatta impostare.
*/