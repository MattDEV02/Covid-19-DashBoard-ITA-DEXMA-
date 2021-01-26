import React from 'react';
import nav, { links } from './js/navbar/';
import './css/navbar/index.css';


class Navbar extends React.Component {
   render() {
      const
         brand = nav.brand,
         target = nav.target;
      return (
         <nav className='navbar navbar-expand-sm bg-dark navbar-dark navbar-custom justify-content-center'>
            <ul className='navbar-nav'>
               <li className={nav.item}>
                  <a href={links[0]} className={brand} target={target}>
                     Home
                  </a>
               </li>
               <li className={nav.item}>
                  <a href={links[1]} className={brand} target={target}>
                     Fonti
                  </a>
               </li>
               <li className={nav.item}>
                  <a href={links[2]} className={brand} target={target}>
                     Info
                  </a>
               </li>
               <li className={nav.item}>
                  <a href={links[3]} className={brand} target={target}>
                     Altro
                  </a>
               </li>
               <li className={nav.item}>
                  <a href={links[4]} className={brand} target={target}>
                     About
                  </a>
               </li>
            </ul>
         </nav>
      );
   }
}

export default Navbar;