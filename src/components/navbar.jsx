import React from 'react';
import { nav } from './js/utils';
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
                  <a href='/' className={nav.brand}>
                     Fonti
                  </a>
               </li>
               <li className={nav.item}>
                  <a href='/' className={nav.brand}>
                     Info
                  </a>
               </li>
               <li className={nav.item}>
                  <a href='/' className={nav.brand}>
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