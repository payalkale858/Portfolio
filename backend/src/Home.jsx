import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  
  const typingSpeed = 100; // speed of typing in ms
  const deletingSpeed = 50; // speed of deleting in ms
  const delayBetweenRoles = 1000; // pause before deleting

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const roles = ["Full-Stack Web Developer", "Python Developer", "Backend Developer"];
    let timeout;

    if (!deleting && charIndex <= roles[roleIndex].length) {
      timeout = setTimeout(() => {
        setDisplayText(roles[roleIndex].substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(roles[roleIndex].substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (!deleting && charIndex > roles[roleIndex].length) {
      // Pause before deleting
      timeout = setTimeout(() => setDeleting(true), delayBetweenRoles);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);
  return (
    <div  className='text-center' id='home'>
       <p className='fs-1 fw-bold gradient-text'>HI I'AM PAYAL</p>
       <p className="fs-2 typing-text" style={{ color: "#ffc107" }}>
        {displayText}
        <span className="cursor">|</span>
      </p>
      <p className='fw-bold fs-5'>A passionate developer dedicated to building responsive, scalable, and user-friendly web applications.
         I enjoy turning ideas into real-world digital solutions using modern technologies.</p>
       <div className="mt-5">
  <a href="/resume.pdf" download="Payal_Resume.pdf" className="btn btn-outline-primary me-2"
>
  Download Resume
</a>


        <button className="btn btn-outline-warning">Contact Me</button>
      </div>
</div>
  )
}
