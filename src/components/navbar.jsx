import React from 'react';
import nav from './js/navbar/index';
import './css/navbar/index.css';


class Navbar extends React.Component {
   render() {
      return (
         <nav className='navbar navbar-expand-sm bg-dark navbar-dark navbar-custom justify-content-center'>
            <ul className='navbar-nav'>
               <li className={nav.item}>
                  <a href='http://www.salute.gov.it/' className={nav.brand} target={nav.target}>
                     Home
                  </a>
               </li>
               <li className={nav.item}>
                  <a href='https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv' className={nav.brand} target={nav.target}>
                     Fonti
                  </a>
               </li>
               <li className={nav.item}>
                  <a href='https://github.com/MattDEV02/Covid-19-DashBoard-ITA-DEXMA-.git' className={nav.brand} target={nav.target}>
                     Info
                  </a>
               </li>
               <li className={nav.item}>
                  <a href='https://matteolambertucci.altervista.org/all/' className={nav.brand} target={nav.target}>
                     Altro
                  </a>
               </li>
               <li className={nav.item} target={nav.target}>
                  <a href='https://github.com/MattDEV02/' className={nav.brand}>
                     About
                  </a>
               </li>
            </ul>
         </nav>
      );
   }
}

export default Navbar;