const getEvent = data => {
   const title = 'Variazione < 0';
   const event = {
      title: title,
      date: data
   };
   return event;
};


export default getEvent;