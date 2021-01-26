import React from 'react';
import nav, { links } from './js/navbar/';
import './css/navbar/index.css';


class Navbar extends React.Component {
   render() {
      return (
         <nav className='navbar navbar-expand-sm bg-dark navbar-dark navbar-custom justify-content-center'>
            <ul className='navbar-nav'>
               <li className={nav.item}>
                  <a href={links[0]} className={nav.brand} target={nav.target}>
                     Home
                  </a>
               </li>
               <li className={nav.item}>
                  <a href={links[1]} className={nav.brand} target={nav.target}>
                     Fonti
                  </a>
               </li>
               <li className={nav.item}>
                  <a href={links[2]} className={nav.brand} target={nav.target}>
                     Info
                  </a>
               </li>
               <li className={nav.item}>
                  <a href={links[3]} className={nav.brand} target={nav.target}>
                     Altro
                  </a>
               </li>
               <li className={nav.item} target={nav.target}>
                  <a href={links[4]} className={nav.brand}>
                     About
                  </a>
               </li>
            </ul>
         </nav>
      );
   }
}

export default Navbar;