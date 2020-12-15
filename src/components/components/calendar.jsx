import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './css/calendar/index.css';


class Calendar extends React.Component {
   render() {
      return (
         <React.StrictMode>
            <div className="col-12 mt-5">
               <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  weekends={false}
                  events={[
                     { title: 'event 1', date: '2020-12-01' },
                     { title: 'event 2', date: '2019-04-02' }
                  ]}
               />
            </div>
         </React.StrictMode>
      );
   }
}

export default Calendar;