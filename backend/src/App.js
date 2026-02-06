import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Aboute from './Aboute';
import Project from './Project';
import Resume from './Resume';
import Skills from './Skills';
import { useNavigate } from 'react-router-dom';
import Education from './Education';

function App() {
  let nav=useNavigate()
  return (
    <div id="app">
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <Aboute />
      </section>
      <section id="skills">
        <Skills />
      </section>
       <section id="education">
        <Education />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="resume">
        <Resume />
      </section>
      <button className='back-to-top'  onClick={()=>{nav(-1)}}>back</button>
    </div>
  );
}

export default App;

