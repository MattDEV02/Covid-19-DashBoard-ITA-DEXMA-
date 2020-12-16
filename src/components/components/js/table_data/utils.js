import moment from 'moment';


const formatData = data => {
   const format = 'DD/MM/YYYY';
   const formatted = moment(data).format(format);
   return formatted;
};

const percentuale = (n1, n2) => {
   const div = (n1 / n2);
   const percent = (div * 100);
   const percentFixed = percent.toFixed(4);
   return percentFixed;
};

const tables = {
   row: 'row table-responsive-md',
   tab: 'table table-hover text-center font-weight-bold'
};

const tooltipID = 'data-tab-tooltip';

const calculator = 'fas fa-calculator ml-2';

export {
   formatData,
   percentuale,
   tables,
   tooltipID,
   calculator
};