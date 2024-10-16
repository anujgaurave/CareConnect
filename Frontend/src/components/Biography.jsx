import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
      <img src={imageUrl} alt="About image" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who are we</h3>
        <p><b>Innovative Solution:</b> A state-of-the-art hospital management system enhancing healthcare delivery.</p>
        <p><b>User-Centric:</b>  Focused on the needs of patients and healthcare providers for a better experience.</p>
        <p><b>Comprehensive Management:</b>  Covers appointment scheduling, staff management, and patient registration.</p>
        <p><b>Data Security:</b>  Prioritizes the confidentiality and security of patient information.</p>
        <p><b>Dedicated Team:</b>  Committed professionals developing effective healthcare solutions.</p>
        <p><b>Personalized Care:</b>  Supports tailored patient experiences through efficient management.</p>
        <p><b>Empowering Administrators:</b>  Provides tools for effective resource and staff management.</p>
        <p><b>Community Focused:</b>  Enhances community health by facilitating access to quality services.</p>
        <p><b>Continuous Improvement:</b>  Committed to refining our platform through user feedback and technology advancements.</p>
      </div>
    </div>
  )
}

export default Biography
