import React from 'react'
import recipeFinderImg from './images/recipe_finder.png'; 
import todoImg from './images/todo.png'; 
import ageCalculatorImg from './images/age_calculator.png'; 
import passwordStrengthImg from './images/password_strength.png';
 import weatherAppImg from './images/weather_app.png';

export default function Project() {
  return (
    <div>
      <h2 style={{ color: '#ffbb00' }} >Projects</h2>
      <div className="logo ">
        <div className="dot"></div>
        <div className="line"></div>
      </div>
<div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>

      {/* Project 1 */}
      <div className="project-card">
         <img src={recipeFinderImg} alt="Recipe Finder" className="project-img" />
        <h3>Recipe Finder web application</h3>
        <p>
         Recipe Finder is a Flask-based web application that helps users search recipes with ingredients and instructions using TheMealDB API. 
         Built with Python, HTML, and CSS.
        </p>
        <div className="links">
          <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://yourproject1.netlify.app" target="_blank" rel="noopener noreferrer">Preview</a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-card">
          <img src={todoImg} alt="Todo App" className="project-img" />
        <h3>Task Management web application</h3>
        <p>
          A Task Management (Todo) web application developed using React and Django.
Users can add, update, delete, and track tasks with a simple and responsive UI built using HTML, CSS, and Bootstrap.
        </p>
        <div className="links">
          <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://yourproject2.netlify.app" target="_blank" rel="noopener noreferrer">Preview</a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-card">
       <img src={ageCalculatorImg} alt="Age Calculator" className="project-img" />
        <h3>Age Calculator</h3>
        <p>
          A simple Age Calculator developed with Javascript backend and HTML/CSS frontend to compute age accurately from the user’s birth date.
        </p>
        <div className="links">
          <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://yourproject3.netlify.app" target="_blank" rel="noopener noreferrer">Preview</a>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project-card">
       <img src={passwordStrengthImg} alt="Password Strength Checker" className="project-img" />
        <h3>Password Strength Checker web application</h3>
        <p>
         Password Strength Checker web application built using Python (Flask), HTML, and CSS, utilizing the zxcvbn library to analyze password strength and provide real-time feedback and security suggestions.
        </p>
        <div className="links">
          <a href="https://github.com/yourusername/project4" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://yourproject4.netlify.app" target="_blank" rel="noopener noreferrer">Preview</a>
        </div>
      </div>

      {/* Project 5 */}
      <div className="project-card">
       <img src={weatherAppImg} alt="Weather App" className="project-img" />
        <h3>Weather Application</h3>
        <p>
          Weather Application built using React (Frontend) and Django REST API (Backend) that fetches real-time weather data from the OpenWeatherMap API, displaying temperature, humidity, and weather conditions for any city.
        </p>
        <div className="links">
          <a href="https://github.com/yourusername/project5" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://yourproject5.netlify.app" target="_blank" rel="noopener noreferrer">Preview</a>
        </div>
      </div>
    </div>
      {/* <div className="recipe_finder">
        <img
          src="/image-payal.jpg"
          alt="Logo" width={'20px'}
          className="sidebar-logo-img"
        />
      </div> */}

      <div className="calculator"></div>
      <div className="weather"></div>
      <div className="task_management"></div>
      <div className="password_checker"></div>
    </div>

  )
}



