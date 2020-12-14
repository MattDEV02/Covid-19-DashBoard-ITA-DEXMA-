import React from 'react';
import nav from './js/navbar/utils';
import './css/navbar/index.css';


class Navbar extends React.Component {
   render() {
      return (
         <nav className='navbar navbar-expand-sm bg-dark navbar-dark navbar-custom justify-content-center'>
            <ul className='navbar-nav'>
               <li className={nav.item}>
                  <a href='/' className={nav.brand}>
                     Home
                  </a>
               </li>
               <li className={nav.item}>
                  <a href='https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv' className={nav.brand}>
                     Fonti
                  </a>
               </li>
               <li className={nav.item}>
                  <a href='https://github.com/pcm-dpc/COVID-19/' className={nav.brand}>
                     Info
                  </a>
               </li>
               <li className={nav.item}>
                  <a href='https://matteolambertucci.altervista.org/all/' className={nav.brand}>
                     Altro
                  </a>
               </li>
               <li className={nav.item}>
                  <a href='/' className={nav.brand}>
                     About
                  </a>
               </li>
            </ul>
         </nav>
      );
   }
}

export default Navbar;