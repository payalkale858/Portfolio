import React, { useState } from 'react';
import myPhoto from './images/image-payal.jpg';
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaProjectDiagram,
  FaFileAlt,
  FaGraduationCap
} from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpen(false); // close sidebar on mobile after click
    }
  };

  return (
    <>
      <div className="text-light fw-bold fs-4 mobile-topbar">
        <p className="mobile-name">Payal Kale</p>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
        >

          ☰
        </button>
      </div>

      {/* Sidebar */}
      <nav className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <img src={myPhoto} alt="Logo" className="sidebar-logo-img" />
        </div>

        <ul className="sidebar-nav">
          <li>
            <button className="sidebar-link" onClick={() => scrollToSection('home')}><FaHome className="nav-icon" /> Home    </button>
           
          </li>
          <li>
            <button className="sidebar-link" onClick={() => scrollToSection('about')}>  < FaUser className="nav-icon" /> About</button>
           
          </li>
           <li>
            <button className="sidebar-link" onClick={() => scrollToSection('skills')}><FaLaptopCode className="nav-icon" ></FaLaptopCode>Skills</button>
            
          </li>
           <li>
            <button className="sidebar-link" onClick={() => scrollToSection('education')}><FaGraduationCap className="nav-icon" ></FaGraduationCap>Education</button>
            
          </li>
          <li>
            <button className="sidebar-link" onClick={() => scrollToSection('project')}><FaProjectDiagram className="nav-icon" ></FaProjectDiagram>Projects</button>
            

          </li>
          <li>
            <button className="sidebar-link" onClick={() => scrollToSection('resume')}><FaFileAlt className="nav-icon" ></FaFileAlt>Contact Us</button>
            
          </li>
        </ul>
      </nav>
    </>
  );
}
