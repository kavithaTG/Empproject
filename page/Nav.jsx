import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div id="navdiv" >
    <section id='navsec'>
      <div id='portnav'>
      <span>PORTPOLIO</span>
      </div>
      <div>
    
    <ul id='navul'>
     <li><Link to="/Home">Home</Link></li>
    <li><Link to="/Login">Login</Link></li>
    <li><Link to="/Signup">Signup</Link></li>
    </ul>
    </div>
   </section>
    </div>
  )
}

export default Nav