import React from 'react';


const
   item = 'nav-item',
   brand = 'navbar-brand';

class Navbar extends React.Component {
   render() {
      return (
         <nav className='navbar navbar-expand-sm bg-dark navbar-dark justify-content-center'>
            <ul className='navbar-nav'>
               <li className={item}>
                  <a href='/' className={brand}>
                     Home
                  </a>
               </li>
               <li className={item}>
                  <a href='/form' className={brand}>
                     Fonti
                  </a>
               </li>
               <li className={item}>
                  <a href='/table' className={brand}>
                     Table
                  </a>
               </li>
               <li className={item}>
                  <a href='/chart' className={brand}>
                     Altro
                  </a>
               </li>
               <li className={item}>
                  <a href='/calendar' className={brand}>
                     Calendar
                  </a>
               </li>
               <li className={item}>
                  <a href='/map' className={brand}>
                     About
                  </a>
               </li>
            </ul>
         </nav>
      );
   }
}

export default Navbar;