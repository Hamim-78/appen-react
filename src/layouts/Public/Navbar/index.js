import React from 'react'
import { Row, Col, Form, ListGroup } from "react-bootstrap";


 const Navbar = () => {



    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
            <a className="navbar-brand" href="#">
               <img className="navbar-brand-logo" src="images/appen.png" alt=""></img>
             </a>
            <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarResponsive">
               <span className="navbar-toggler-icon"></span>
           </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
               <ul id="top-bar" className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <a class="nav-link active" href="#banner">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#features">Features</a>
                  </li>
                   <li className="nav-item">
                     <a className="nav-link" href="#screenshot">Screenshot</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#testimonial">Testimonial</a>
                   </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Contact</a>
                  </li>
              </ul>
            </div>
        </div>
   </nav>
    )
}

export default Navbar