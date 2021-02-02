import React from 'react';
import nav, { links } from './js/navbar/';
import './css/navbar/index.css';


class Navbar extends React.Component {
   render() {
      const { item, brand, target } = nav;
      return (
         <nav className={nav.bar}>
            <ul className={nav.list}>
               <li className={item}>
                  <a href={links[0]} className={brand} target={target}>
                     Home
                  </a>
               </li>
               <li className={item}>
                  <a href={links[1]} className={brand} target={target}>
                     Fonti
                  </a>
               </li>
               <li className={item}>
                  <a href={links[2]} className={brand} target={target}>
                     Info
                  </a>
               </li>
               <li className={item}>
                  <a href={links[3]} className={brand} target={target}>
                     Altro
                  </a>
               </li>
               <li className={item}>
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
