import React from 'react'
import {

  FaUser,
  FaLaptopCode,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import axios from 'axios';
import { useState } from 'react';

export default function Resume() {
  let [name, setname] = useState("")
  let [subject, setsubject] = useState("")
  let [email, setemail] = useState("")
  let [message, setmessage] = useState("")
  let add_stu = (e) => {
    e.preventDefault()
    let new_stu = { name, email, subject, message }
    axios.post("http://127.0.0.1:8000/contact/", new_stu)
  

      .then((responce) => {

        alert(responce.data.message)
        setname("");
        setemail("");
        setsubject("");
        setmessage("");

      })
      .catch((error) => {
        alert('error in post method...')
      })

  }
  return (
    <div >
      <h2 style={{ color: '#ffbb00' }} >Contact Us</h2>
      <div className="logo ">
        <div className="dot"></div>
        <div className="line"></div>
      </div>
      <div className="cont bg-light mt-5 ms-5">

        <div className="info">
          <p className='fw-bold'>Contact Info</p>

          <li>
            <FaUser className="nav-icon" /> Payal Kale
          </li>

          <li>
            <FaLaptopCode className="nav-icon" /> Full Stack Developer
          </li>

          <li>
            <FaEnvelope className="nav-icon" />

            kalepayal53@gmail.com

          </li>

          <li>
            <FaPhoneAlt className="nav-icon" />

            +91 96655 95439

          </li>



          {/* Social links */}
          <div className="footer">
            <a
              href="https://github.com/payalkale858"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/payal-kale-a5b433301"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div >
          <form className=" text-dark fw-bold" onSubmit={add_stu}>


            Name:<input className="form-control" onChange={(e) => setname(e.target.value)} />



            Email:<input className="form-control" onChange={(e) => setemail(e.target.value)} />


            Subject: <input className="form-control" onChange={(e) => setsubject(e.target.value)} />




            Message: <textarea className="form-control" onChange={(e) => setmessage(e.target.value)} rows="4"></textarea>


            <button className="btn btn-warning w-100 mt-3 ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
