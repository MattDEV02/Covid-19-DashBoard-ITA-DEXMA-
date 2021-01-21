import moment from 'moment';


const formatData = (data, format) => { // format is an optional parameter
   const default_format = 'DD/MM/YYYY';
   format = format ? format : default_format;
   const formatted = moment(data).format(format);
   return formatted;
};

const percentuale = (n1, n2) => {
   const div = (n1 / n2);
   const percent = (div * 100);
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