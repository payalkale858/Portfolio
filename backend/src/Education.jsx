import React from 'react'

export default function Education() {
  return (
    <div>
         <h2 style={{ color: '#ffbb00' }} >Education</h2>
      <div className="logo ">
        <div className="dot"></div>
        <div className="line"></div>
      </div>
      <div className="education-container">
      <h2 className="education-heading">Education & Learning</h2>

      <div className="education-item">
        <h4 className="edu-year">2025 – Present</h4>
        <h3 className="edu-title">App Development – Self-Learning (YouTube)</h3>
        <p className="edu-description">
          Currently learning React Native for App Development.
        </p>
      </div>

      <div className="education-item">
        <h4 className="edu-year">2023 – 2025</h4>
        <h3 className="edu-title">MSc Computer Science – G.S.G. College, Umarkhed</h3>
        <p className="edu-description">
          Studied Python Programming, DBMS, Networking, and Operating Systems.
        </p>
      </div>

      <div className="education-item">
        <h4 className="edu-year">2023 – 2024</h4>
        <h3 className="edu-title">Front-End Development – Self-Learning (YouTube)</h3>
        <p className="edu-description">
          Learned Web Designing, HTML, CSS, JavaScript, Tailwind, Bootstrap, React.js, Git & GitHub.
        </p>
      </div>

      <div className="education-item">
        <h4 className="edu-year">2020 – 2023</h4>
        <h3 className="edu-title">Bachelor of Science – G.S.G. College, Umarkhed</h3>
        <p className="edu-description">
          Studied basics of Computer Science and Mathematics.
        </p>
      </div>
    </div>
    </div>
  )
}
