import React, { useState } from "react";
import { emailValidator, passwordValidator } from "../components/regexValidator";
import { Link } from "react-router-dom";


const Signup = () => {
  const [input,setInput] = useState({name:'',email:'',password:'',confirm_password:''})

  const [errorMessage, seterrorMessage] = useState('')
  const [successMessage,setsuccessMessage] = useState('')

  const handleChange = (e) => {
    setInput ({...input,[e.target.name]:e.target.value});
  }

  const formSubmitter = (e) => {
    e.preventDefault()
    setsuccessMessage('')
    seterrorMessage('')

    if(input.name === '' || input.email === '' || input.password === '' || input.confirm_password === '')
    return seterrorMessage('All field must be filled')
    
    if(!input.name) return seterrorMessage('username require')

    if(!emailValidator(input.email)) 
    return seterrorMessage('Please enter valid email id');

    if(!passwordValidator(input.password)) 
    return seterrorMessage('Password incorrect');

    if(input.password !== input.confirm_password)
    return seterrorMessage('Password and Confirm password must be same');

  
    

    setsuccessMessage('Successfully Validated')
  }

    return(
      <div>
  <div className="container">
    <div className="text">Signup</div>
    <form onSubmit={formSubmitter}>
    {errorMessage.length > 0 && (
            <div style={{color:"red"}}>{errorMessage}</div>
      )}
      {successMessage.length > 0 && (
            <div style={{color:"green"}}>{successMessage}</div>
          )} 
      <div className="data">
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" id="name" value={input.name} onChange={handleChange}/>
      </div>
      <div className="data">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={input.email} onChange={handleChange} />
      </div>
      <div className="data">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={input.password} onChange={handleChange} />
      </div>
      <div className="data">
        <label htmlFor="confirm_password">Confirm Password</label> 
        <input type="password" name="confirm_password" id="password" value={input.confirm_password} onChange={handleChange}/>
      </div>
      
      <div className="btn">
        <button type="submit">Signup</button>
      </div>
      <div className="signup-link">Already a member?<Link to= '/'>Login here</Link></div>
    </form>
  </div>
</div>

    )
}

export default Signup;