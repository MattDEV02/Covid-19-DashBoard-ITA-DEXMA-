const
   protocol = 'http',
   host = '127.0.0.1',
   port = 8080,
   route = '/covid19/backend/'

const endPoint = String(protocol + '://' + host + ':' + port + route);


export default endPoint;


/*
   sarebbe stato meglio impostare la porta 80 visto che è la porta standard del protocollo HTTP ma
   Xampp non me l'ha fatta impostare.
*/