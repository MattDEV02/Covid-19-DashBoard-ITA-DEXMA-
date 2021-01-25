const days = 10; // We can change this

const
   protocol = 'http',
   host = '127.0.0.1',
   port = 8080,
   route = '/covid19/backend/',
   file = 'index.php', //It Is optional
   req_parameter = `?days=${days}`;

const isIterable = value => {
   const obj = Object(value);
   const result = (Symbol.iterator in obj);
   return result;
};


export default isIterable;

export {
   protocol,
   host,
   port,
   route,
   file,
   req_parameter,
}