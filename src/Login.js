import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  let [name, setName]= useState("");
  let [password, setPassword]= useState("");
  const navigate=useNavigate()
  let [Errname, setErrName]= useState();
  let [Errpassword, setErrpassword]= useState();

  const handelClick=()=>{
   if(name===""){
    setName("Enter your name")
   }

   if (password===""){
    setPassword("Enter Password")
   }
  
   if(name==="sumit"&&password==="12345"){
    navigate("/Home")
   }
   else{
    alert("not match")
   }
   
  }

    
  return (
    <div className='Login'>
      <div className='user'>
      <h3>User Login</h3>
      <br />
      Inter Name:----
        <input type="text"  placeholder='Name'  onChange={(e)=>setName(e.target.value)}/>
        <br /><br />
        Inter Password:-
        <input type="text"  placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <br /><br />
        <button  onClick={handelClick}>Click</button>
        </div>
    </div>
  )
}

export default Login