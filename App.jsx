import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Nav from "./page/Nav"
import Home from './page/Home'
import Signup from './page/Signup'
import Login from './page/Login'

import "./Global.css"
 
const App = () => {
  return ( 
    <div id="navdiv">
      <section>
        <Router>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='/Signup' element={<Signup/>}></Route>

            </Routes>
        </Router>
      </section>
    </div>
  )
}

export default App