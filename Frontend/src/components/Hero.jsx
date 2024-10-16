import React from 'react'

const Hero = ({title,imageurl}) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1> {title}</h1>
        <p>
        CareConnect is a cutting-edge hospital management system dedicated to delivering comprehensive healthcare solutions with efficiency and expertise. Our skilled team is focused on enhancing patient experiences by simplifying appointment scheduling and staff management. At CareConnect, we prioritize the well-being of our users, ensuring a seamless and organized journey toward optimal health and wellness for every patient and healthcare provider
         </p>
      </div>
      <div className="banner">
        <img src={imageurl} alt="hero" className='animated-image' />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  )
}

export default Hero
