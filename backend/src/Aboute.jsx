import React from 'react'
import myPhoto from './images/image-payal.jpg';
export default function Aboute() {
  return (
    <div id='aboute' className='m-4'>
      <h2 style={{ color: '#ffbb00' }} >ABOUT ME</h2>
      <div className="logo ">
        <div className="dot"></div>
        <div className="line"></div>
      </div>
      <div className="sidebar-logo mobile-only">
         <img src={myPhoto} alt="Logo" className="sidebar-logo-img" />
      </div>
      <p className='fs-5 mt-5' style={{ color: 'beige' }}>  <b>H</b>i, I’m Payal Kale, a Python & Full-Stack Developer with hands-on experience in building scalable web applications.I work with React, JavaScript, HTML, CSS, and backend technologies like Django, Flask, and REST APIs, along with SQL databases.I am eager to apply my technical skills in an organization,gain hands-on experience, and grow as a developer while learning from real-world projects.</p>
      <ul className='mt-4'>
        <li>
          <strong className='fs-5 fw-bold me-3' style={{ color: '#ffbb00' }}>Name:</strong> Payal Kale
        </li>
        <li>
          <strong className='fs-5 fw-bold me-3' style={{ color: '#ffbb00' }}>Degree:</strong> M.Sc in Computer Science (CGPA: 8.2)
        </li>
        <li>
          <strong className='fs-5 fw-bold me-3' style={{ color: '#ffbb00' }}>Email:</strong> kalepayal53@gmail.com
        </li>
      </ul>








    </div>
  )
}
