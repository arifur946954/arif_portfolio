import React from 'react';
import './Testmonial.css'
import AV1 from '../images/assets/avatar1.jpg'
import AV2 from '../images/assets/avatar2.jpg'
import AV3 from '../images/assets/avatar3.jpg'
import AV4 from '../images/assets/avatar4.jpg'

const Testmonial = () => {
    return (
      <section id='testmonial'>
<h5>Review from Clints</h5>
<h2>Testmonial</h2>
<div className='container testmonial_container'>
<article className='testmonial'>
  <div className='client_avatar'>
<img src={AV1}/>
</div>
<h5 className='clint_name'>Arifur Rahman</h5>
<small className='client_review'>
If you plan on customizing the Bootstrap Sass files, 
or don't want to use a CDN for theIf you plan on customizing the Bootstrap Sass files, 
or don't want to use a CDN for the or don't want to use a CDN for the
</small>


</article>

<article className='testmonial'>
  <div className='client_avatar'>
<img src={AV2}/>
</div>
<h5 className='clint_name'>Arifur Rahman</h5>
<small className='client_review'>
If you plan on customizing the Bootstrap Sass files, 
or don't want to use a CDN for theIf you plan on customizing the Bootstrap Sass files, 
or don't want to use a CDN for the or don't want to use a CDN for the
</small>
 

</article>

<article className='testmonial'>
  <div className='client_avatar'>
<img src={AV3}/>
</div>
<h5 className='clint_name'>Arifur Rahman</h5>
<small className='client_review'>
If you plan on customizing the Bootstrap Sass files, 
or don't want to use a CDN for theIf you plan on customizing the Bootstrap Sass files, 
or don't want to use a CDN for the or don't want to use a CDN for the
</small>
 

</article>


<article className='testmonial'>
  <div className='client_avatar'>
<img src={AV4}/>
</div>
<h5 className='clint_name'>Arifur Rahman</h5>
<small className='client_review'>
If you plan on customizing the Bootstrap Sass files, 
or don't want to use a CDN for theIf you plan on customizing the Bootstrap Sass files, 
or don't want to use a CDN for the or don't want to use a CDN for the
</small>


</article>
</div>


      </section>
    );
};

export default Testmonial;