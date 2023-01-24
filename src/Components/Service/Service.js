import React from 'react';
import './Service.css'
import { BiCheck } from 'react-icons/bi';

const Service = () => {
    return (
       <section id='service'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className='contaner service_container'>

            {/* start of UI/UX Design */}
            <article className='service'>
                <div className='service_head'>
                    <h3>UI/UX Design</h3>

                </div>
                <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>

                </ul>
            </article>

            {/* End of UI/UX Design */}

            {/* start web Development */}

            <article className='service'>
                <div className='service_head'>
                    <h3>Web Development</h3>

                </div>
                <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>

                </ul>
            </article>

              {/* End web Development */}
              {/* start create container */}

              <article className='service'>
                <div className='service_head'>
                    <h3>Content creation</h3>

                </div>
                <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Include popular icons in your React</p>
                    </li>

                </ul>
            </article>

            {/* end of create conrainer */}


        </div>
       </section>
    );
};

export default Service;