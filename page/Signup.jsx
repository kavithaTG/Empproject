import React, { useState } from 'react'
import {json, useNavigate} from 'react-router-dom'

const Signup = () => {
  const [user,setUser]=useState({userName:"",Phone:"",Email:"",Password:"",})
  let navigate=useNavigate()
 

  let handleSigninbtn=(e)=>{
    e.preventDefault();
 
    localStorage.setItem("user",JSON.stringify(user))
    navigate("/Login")
  }
  return (
    <div  id='signin'>
   
      <form action="">
        <label htmlFor="Name">Name</label>
        <input type="text" id='username' name='userName'value={user.userName} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value,})} /><br />
        <label htmlFor="Phone">Phone</label>
        <input type="number" id='phone' name='Phone'value={user.Phone} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}/><br />
        <label htmlFor="email">email</label>
        <input type="email" id='email' name='Email' value={user.Email} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}/><br />
        <label htmlFor="Password">password</label>
        <input type="password" id='password' name='Password'value={user.Password} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}/><br/>
        <button onClick={handleSigninbtn}>submit</button>
      </form>
    
    </div>
  )
}

export default Signup