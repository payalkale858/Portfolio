import React, { useEffect, useState, useMemo } from "react";



export default function Home() {
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenRoles = 1000;

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Use useMemo to avoid ESLint warning
  const roles = useMemo(
    () => ["Full-Stack Web Developer", "Python Developer", "Backend Developer"],
    []
  );

  useEffect(() => {
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
      timeout = setTimeout(() => setDeleting(true), delayBetweenRoles);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

    }
  };
  return (
    <div className="text-center" id="home">
      <p className="fs-1 fw-bold gradient-text">HI I'AM PAYAL</p>
      <p className="fs-2 typing-text" style={{ color: "#ffc107" }}>
        {displayText}
        <span className="cursor">|</span>
      </p>
      <p className="fw-bold fs-5">
        A passionate developer dedicated to building responsive, scalable, and user-friendly web
        applications. I enjoy turning ideas into real-world digital solutions using modern
        technologies.
      </p>
      <div className="mt-5">
        <a
          href="https://drive.google.com/uc?export=download&id=1A03wPZFGEL7tnn5kGQLuIHixz6h7D5FT"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary me-2"
        >
          Download Resume
        </a>



        <button className="btn btn-outline-warning" onClick={() => scrollToSection('resume')}> Contact Me </button>

      </div>
    </div>
  );
}
