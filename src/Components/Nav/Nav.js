import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageAltDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
    const [activenew,setActiveNew]=useState('#');
    return (
 <nav>
          <a href="#" onClick={()=>setActiveNew('#')} className={activenew ==='#'? 'active' : ''} ><AiOutlineHome/></a>
          <a href="#about" onClick={()=>setActiveNew('#about')} className={activenew ==='#about'? 'active' : ''}><AiOutlineUser/></a>
          <a href="#exprence" onClick={()=>setActiveNew('#exprence')} className={activenew ==='#exprence'? 'active' : ''}><BiBook/></a>
          <a href="#service" onClick={()=>setActiveNew('#service')} className={activenew ==='#service'? 'active' : ''}><RiServiceLine/></a>
          <a href="#contact"onClick={()=>setActiveNew('#contact')} className={activenew ==='#contact'? 'active' : ''}><BiMessageAltDetail/></a>
          </nav>
    );
};

export default Nav;