import React, { useState } from 'react'

const Email = () => {

    const[name, setName]=useState("");
    const[Email, setEmail]=useState("");
    const [validEmail, setValidEmail]=useState("");
    const [contact, setContact]= useState("");
    

    const [ArrEmail, setArrEmail]= useState("");
    const [Arrcontact, setArrcontact]=useState("")
    


    const submitbutton= () =>{
    // setEmail(true)
        if (name===""){
            setName("Enter a name")
        }
        if (Email ===""){
            setEmail("Enter Your Email")
        }
        else{
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const isValid = emailRegex.test(Email);

        if (isValid === false ){
            setValidEmail("Enter a valid Email");
             }   
         }

         if(contact.length>=10){
            setContact("Enter Your Number")
         }
         else{
            setContact("number should be 10 digit")
         }
        }


  return (
    <div className='Email' style={{marginTop:"2px", height:"100vh"}}>

        <form
          action="https://formspree.io/f/mpzvaelj"
          method="POST"
        >
          <label>
            Your Name:---
            <input type="text" name="Name" placeholder=''/>
          </label>
          <br />
          <label>
            Your email:---
            <input type="email" name="email"/>
          </label>
          <br /><br />
          <label>
            Your message:---</label>
           <textarea name="Massage" id="" cols="30" rows="10"></textarea>
           <br /><br />
         
          <button type="submit">Send</button>
        </form>
        {/* <div className='call'>
        <a href="tel:+9137505423">Call Now</a>
        </div> */}
            </div>
          )
}

export default Email;
