String.prototype.remove = function (str_to_remove) {
   const result = this.replace(str_to_remove, '');
   return result;
};

const title = 'Andamento Curva Nuovi Positivi Covid19 Italia';

const getLegendFromTitle = title => {
   const pattern = (/Andamento Curva |Covid19 Italia/g);
   const result = title.remove(pattern);
   return result;
};


export default title;

export {
   title,
   getLegendFromTitle
};