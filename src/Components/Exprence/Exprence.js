import React from 'react';
import { BsFillPatchCheckFill  } from 'react-icons/bs';
import './Exprence.css'

const Exprence = () => {
    return (
       <section id='exprence'>
        <h5>what skill i have</h5>
        <h2>My Exprence</h2>
        <div className='container exprence_container'>
            {/* frontend start from here */}
<div className='exprence_frontend'>
<h3>frontend Developer</h3>
<div className='exprence_content'>
<article className='exprence_details'>
    <BsFillPatchCheckFill className='exprence_details_icon'/>
   <div>
   <h4>HTML</h4>
    <small className='color-light'>Exprenced</small>
   </div>

</article>

<article className='exprence_details'>
    <BsFillPatchCheckFill className='exprence_details_icon'/>
    <div>
    <h4>CSS</h4>
    <small className='color-light'>Exprenced</small>
    </div>

</article>

<article className='exprence_details'>
    <BsFillPatchCheckFill className='exprence_details_icon'/>
 <div>
 <h4>Bootstrap</h4>
    <small className='color-light'>Exprenced</small>
 </div>

</article>

<article className='exprence_details'>
    <BsFillPatchCheckFill className='exprence_details_icon'/>
   <div>
   <h4>Tailwind</h4>
    <small className='color-light'>Exprenced</small>
   </div>

</article>

<article className='exprence_details'>
    <BsFillPatchCheckFill className='exprence_details_icon'/>
   <div>
   <h4>React</h4>
    <small className='color-light'>Exprenced</small>
   </div>

</article>

<article className='exprence_details'>
    <BsFillPatchCheckFill className='exprence_details_icon'/>
   <div>
   <h4>Javascript</h4>
    <small className='color-light'>Exprenced</small>
   </div>

</article>
</div>
</div>

{/* backend start from here */}
<div className='exprence_backend'>
<h3>Backend Developer</h3>
<div className='exprence_content'>
<article className='exprence_details'>
    <BsFillPatchCheckFill className='exprence_details_icon'/>
  <div>
  <h4>Node.js</h4>
    <small className='color-light'>Exprenced</small>
  </div>

</article>

<article className='exprence_details'>
    <BsFillPatchCheckFill className='exprence_details_icon'/>
<div>
<h4>ES6</h4>
    <small className='color-light'>Exprenced</small>
</div>

</article>

<article className='exprence_details'>
    <BsFillPatchCheckFill className='exprence_details_icon'/>
<div>
<h4>MongoDB</h4>
    <small className='color-light'>Exprenced</small>
</div>

</article>

<article className='exprence_details'>
    <BsFillPatchCheckFill className='exprence_details_icon'/>
<div>
<h4>Firebase</h4>
    <small className='color-light'>Exprenced</small>
</div>

</article>

<article className='exprence_details'>
    <BsFillPatchCheckFill className='exprence_details_icon'/>
  <div>
  <h4>Routing</h4>
    <small className='color-light'>Exprenced</small>
  </div>

</article>

<article className='exprence_details'>
    <BsFillPatchCheckFill className='exprence_details_icon'/>
<div>
<h4>Mysql</h4>
    <small className='color-light'>Exprenced</small>
</div>

</article>

</div>



</div>
        </div>
       </section>
    );
};

export default Exprence;