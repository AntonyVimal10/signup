import React, { useState } from "react";
import { emailValidator, passwordValidator } from "../components/regexValidator";
import { Link } from "react-router-dom";



const Login = () => {
  //const history = useNavigate()

  const [input,setInput] = useState({email:'',password:''})

  const [errorMessage, seterrorMessage] = useState('')
  const [successMessage,setsuccessMessage] = useState('')

  const handleChange = (e) => {
    setInput ({...input,[e.target.name]:e.target.value});
  }

  const formSubmitter = (e) => {
    e.preventDefault()
    setsuccessMessage('')
    seterrorMessage('')
    if(!emailValidator(input.email)) 
    return seterrorMessage('Please enter valid email id');

    if(!passwordValidator(input.password)) 
    return seterrorMessage('Password should be minimum 8 characters with the combination of uppercase,lowercase,numbers and special character');

    setsuccessMessage('Successfully Validated')
    //if(input.email !== 'vimal@gmail.com' || input.password !== 'Password@2')
    //return seterrorMessage('Invalid email or password')
    //history.push('/dashboard')
  }
    return(
      <div>
      <div className="container">
        <div className="text">Login</div>
        <form onSubmit={formSubmitter}>
          {errorMessage.length > 0 && (
            <div style={{color:"red"}}>{errorMessage}</div>
          )}
          {successMessage.length > 0 && (
            <div style={{color:"green"}}>{successMessage}</div>
          )}  
          <div className="data">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} />
          </div>
          <div className="data">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
          </div>  
          <div className="btn">
            <button type="submit">Login</button>
          </div>
          <div className="signup-link">Not a member?<Link to= '/signup'>Signup here</Link></div>
        </form>
      </div>
    </div>


    )
}

export default Login;