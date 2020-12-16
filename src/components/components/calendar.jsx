import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ReactTooltip from 'react-tooltip';
import getCovid19Date, { tooltipID } from './js/calendar/utils';
import './css/calendar/index.css';


class Calendar extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const covid19 = this.props.covid19;
      const events = getCovid19Date(covid19);
      getCovid19Date(covid19);
      return (
         <React.StrictMode>
            <div className='col-12 mt-5' data-tip='' data-for={tooltipID}>
               <ReactTooltip id={tooltipID} textColor='#007bff'>Questo Calendario riporta le Date in cui c'è stata una Variazione dei Positivi Totali minore-uguale di Zero</ReactTooltip>
               <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView='dayGridMonth'
                  events={events}
               />
            </div>
         </React.StrictMode>
      );
   }
}

export default Calendar;