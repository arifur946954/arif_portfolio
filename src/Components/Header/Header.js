import React from 'react';
import CTA from './CTA';
import './Header.css'


import me from '../images/assets/me.png'
import arif2 from '../images/assets/arif2.jpg.png'
import HeaderSocial from './HeaderSocial';


const Header = () => {
    return (
      <header>
   <div className='container header_container'>
   <h5>Hello I Am</h5>
       <h1>Arifur Rahman</h1>
       <h5 className='text-light'>hello I Am full stack web Developer</h5>
       <CTA></CTA>
       <HeaderSocial></HeaderSocial>
       <div className='me'>
        {/* <img src={me}/> */}
        <img src={arif2}/>
        

       </div>
       <a href='#contract' className='schrole_down'>schrole_down</a>

   </div>
      </header>
    );
};

export default Header;