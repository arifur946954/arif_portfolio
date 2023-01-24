import React from 'react';
import { FiAward, FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import me from '../images/assets/me.png'
import arif2 from '../images/assets/arif2.jpg.png'
import './About.css'

const About = () => {
    return (
      <section id='about'>
        <h5>To Know</h5>
        <h2>About Me</h2>

<div className='container about_container'>
<div className='about_me'>
  <div className='about_me-image'>
    <img src={arif2}/>
</div>
</div>

<div className='about_content'>
<div className='about_cards'>
  <article className='about_card'>
  <FiAward className='about_icon'/>
  <h5>Exprence</h5>
  <small>3+ year expreance</small>
  </article>

  <article className='about_card'>
    
  <FiUsers className='about_icon'/>
  <h5>Clint</h5>
  <small>200+ clint world Wide</small>
  </article>

  <article className='about_card'>
  <VscFolderLibrary className='about_icon'/>
  <h5>Project</h5>
  <small>5+ project done</small>
  </article>



</div>
<p>Now, imagine instead if you had resources that you could turn to. What if that 
  previous team had kept detailed records like project timelines and plans, meeting
   summaries, step-by-step processes, sketches, roadmaps, and more? </p>
   <a href='#contact' className='btn btn-primary'>Lets Talk</a>

</div>

</div>
      </section>
    );
};

export default About;