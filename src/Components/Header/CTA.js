import React from 'react';
import cv from '../images/assets/cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a className='btn' href={cv} download>Download</a>
            <a className='btn btn-primary' href='#contract'>Lets Talk</a>
        </div>
    );
};

export default CTA;