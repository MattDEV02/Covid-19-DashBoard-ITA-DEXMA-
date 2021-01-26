Array.prototype.sum = function () {
   const intArr = this.map(elem => parseInt(elem)); // All Array Element to Integer
   const sum = intArr.reduce((a, b) => ((a + b)));
   return sum;
};

Array.prototype.last = function () {
   const index = (this.length - 1);
   const result = this[index];
   return result;
};

Array.prototype.getIncrement = function () {
   const penultimo_indice = (this.length - 2);
   const result = (
      this.last() -
      this[penultimo_indice]
   );
   return result;
};

const randomColor = () => {
   const
      hex = 0XFFFFFF,
      random = Math.random();
   const x = Math.round((hex * random)).toString(16);
   const y = (6 - x.length);
   const z = ('000000').substring(0, y);
   const code = new String(z + x);
   const result = ('#' + code);
   return result;
};

const getMin_or_Max = (array, isMinValue) => {
   const result = isMinValue ? Math.min(...array) : Math.max(...array);
   return result;
};
class DatiCovid19 {
   constructor(nuovi_positivi, ingressi_terapia_intensiva, variazioni_totale_positivi, date) {
      this.nuovi_positivi = nuovi_positivi;
      this.ingressi_terapia_intensiva = ingressi_terapia_intensiva;
      this.variazioni_totale_positivi = variazioni_totale_positivi;
      this.date = date;
   }
}
class MinMax {
   constructor(min, max) {
      this.min = min;
      this.max = max;
   }
   getInterval = () => {
      const result = (this.max - this.min);
      return result;
   }
}


export default DatiCovid19;

export {
   MinMax,
   getMin_or_Max,
   randomColor
};