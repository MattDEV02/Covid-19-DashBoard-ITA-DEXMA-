import axios from 'axios';
import isIterable, {
   protocol,
   host,
   port,
   route,
   file,
   req_parameter,
} from './utils';


const URL_andamento_nazionale = new String((protocol + '://' + host + ':' + port + route + file + req_parameter)); // String Casting

const URL_andamento_regioni = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json';

const ErrMsg = 'Impossibile caricare l\'Output / Aggiornare lo State';

const
   andamentoNazionale = axios.get(URL_andamento_nazionale),
   andamentoRegioni = axios.get(URL_andamento_regioni);

const requests = [andamentoNazionale, andamentoRegioni];

const isValidData = (...data) => { // destruct operator (ES6)
   let results = [];
   data.map(arg => {
      results.push(
         (arg !== null) &&
         (arg !== undefined) &&
         (arg !== 0) &&
         (arg !== false) &&
         (typeof arg !== 'string') &&
         (isIterable(arg))
      );
   });
   const result = (!results.includes(false));
   return result;
}

const fetchCovid19Data = async Obj => {
   const responses = await Promise.all(requests)
      .catch(error => Obj.handleError(error));
   console.log(responses);
   return responses;
};


export default fetchCovid19Data;

export {
   isValidData,
   ErrMsg
};


/*
   sarebbe stato meglio impostare la porta 80 visto che è la porta standard del protocollo HTTP ma
   Xampp non me l'ha fatta impostare.
*/