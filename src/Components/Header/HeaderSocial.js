import React from 'react';
import {BsLinkedin } from 'react-icons/bs';
import {BsGithub } from 'react-icons/bs';
import {SiUpwork } from 'react-icons/si';

const HeaderSocial = () => {
    return (
        <div className='header_social'>
<a href='https://www.linkedin.com/in/arifur-rahman-92b613140/' target="blank" ><BsLinkedin/></a>
<a href='https://github.com/arifur946954' target="blank"> <BsGithub/> </a>
<a href='https://www.upwork.com/nx/find-work/best-matches' target="blank"> <SiUpwork/></a>
        </div>
    );
};

export default HeaderSocial;