import moment from 'moment';


const formatData = data => {
    const format = 'DD/MM/YYYY';
    const formatted = moment(data).format(format);
    return formatted;
};

const nav = {
    item: 'nav-item',
    brand: 'navbar-brand'
};

export {
    formatData,
    nav
};