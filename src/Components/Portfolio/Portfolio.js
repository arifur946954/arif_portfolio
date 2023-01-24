import React from 'react';
import './Portfolio.css'
import img1 from '../images/assets/portfolio1.jpg'
import img2 from '../images/assets/portfolio2.jpg'
import img3 from '../images/assets/portfolio3.jpg'
import img4 from '../images/assets/portfolio4.jpg'
import img5 from '../images/assets/portfolio5.png'
import img6 from '../images/assets/portfolio6.jpg'

const Portfolio = () => {
    return (
      <section id='portfolio'>
<h5>My recent Work</h5>
<h2>Portfolio</h2>
<div className='container portfolio_container'>
    <article className='portfolio_iteam'>
        <div className='portfolio_iteam-image'>
<img src={img1}/>
        </div>
        <h3>This is portfoio iteam Title</h3>
       <div className='portfolio_iteam-link'>
       <a href='#' className='btn' target='_blank'>Github</a>
        <a href='#' className='btn btn_primary' target='_blank'>Live Demo</a>
       </div>
    </article>


    <article className='portfolio_iteam'>
        <div className='portfolio_iteam-image'>
<img src={img2}/>
        </div>
        <h3>This is portfoio iteam Title</h3>
        <a href='#' className='btn' target='_blank'>Github</a>
        <a href='#' className='btn btn_primary' target='_blank'>Live Demo</a>
    </article>

    <article className='portfolio_iteam'>
        <div className='portfolio_iteam-image'>
<img src={img3}/>
        </div>
        <h3>This is portfoio iteam Title</h3>
        <a href='#' className='btn' target='_blank'>Github</a>
        <a href='#' className='btn btn_primary' target='_blank'>Live Demo</a>
    </article>

    <article className='portfolio_iteam'>
        <div className='portfolio_iteam-image'>
<img src={img4}/>
        </div>
        <h3>This is portfoio iteam Title</h3>
        <a href='#' className='btn' target='_blank'>Github</a>
        <a href='#' className='btn btn_primary' target='_blank'>Live Demo</a>
    </article>

    <article className='portfolio_iteam'>
        <div className='portfolio_iteam-image'>
<img src={img5}/>
        </div>
        <h3>This is portfoio iteam Title</h3>
        <a href='#' className='btn' target='_blank'>Github</a>
        <a href='#' className='btn btn_primary' target='_blank'>Live Demo</a>
    </article>

    <article className='portfolio_iteam'>
        <div className='portfolio_iteam-image'>
<img src={img6}/>
        </div>
        <h3>This is portfoio iteam Title</h3>
        <a href='#' className='btn' target='_blank'>Github</a>
        <a href='#' className='btn btn_primary' target='_blank'>Live Demo</a>
    </article>
</div>
      </section>
    );
};

export default Portfolio;