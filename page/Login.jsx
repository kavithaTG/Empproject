import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let[user,setUser]=useState({
    Email:"",
    Password:""
  })
  
  let navigate=useNavigate()

  let handleLoginbtn=(e)=>{
     e.preventDefault()
    const logindata= JSON.parse(localStorage.getItem("user"))
    if(user.Email===logindata.Email && user.Password===logindata.Password)
    {
      console.log("Login successfull!!!");
      localStorage.setItem("logindata",true) 
      navigate("/")
    }
    else{
      console.log(" UFFF Login Failed!!");
      localStorage.setItem("logindata",false) 
    }
    

  }
  return (
    
    <div id='logdiv'>
      <div id='logformdiv'>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="Email" id='E-mail' name='Email' value={user.Email} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}/>
        <label htmlFor="password">password</label>
        <input type="password" id='password' name='Password' value={user.Password} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}/>
        <button onClick={handleLoginbtn}>submit</button>
       
      </form>
      </div>
     
    </div>
  
  )
}

export default Login