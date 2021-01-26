import moment from 'moment';


const formatData = (data, format = 'DD/MM/YYYY') => { // format is an optional parameter with a default value
   const formatted = moment(data).format(format);
   return formatted;
};

const percentuale = (n1, n2) => {
   const division = (n1 / n2);
   const percent = (division * 100);
   const percentFixed = percent.toFixed(2);
   return percentFixed;
};

const tables = {
   row: 'row table-responsive-md',
   tab: 'table table-hover text-center font-weight-bold'
};

const tooltipID = 'data-tab-tooltip';

const calculator = 'fas fa-calculator ml-1';


export default tables;

export {
   percentuale,
   formatData,
   tooltipID,
   calculator
};