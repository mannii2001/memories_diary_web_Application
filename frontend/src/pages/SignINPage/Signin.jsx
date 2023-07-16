import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import './Signin.css';
import axios from 'axios';
import { useNavigate } from "react-router";

const Signin = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      if(!email || !password){
        alert("All fields are Mandatory");
        return;
      }
       
      try {
       
        const requestBody = {
          "email": `${email}`,
          "password": `${password}`,
        };
  
        const response = await axios.post('/DiaryUsers/login', JSON.stringify(requestBody), {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        // Handle successful response here
        console.log(response.data);
        localStorage.setItem("jwtToken",`${response.data.accessToken}`);
        navigate('/');
  
      } catch (error) {
        // Handle error response here
        
        console.error(error.request.status);
        if(error.request.status === 401){
          alert("Wrong Credentials! Please Login Again.")
          setEmail("");
          setPassword("");
        }
      }
    };
    return (
      <div className="App">
        <div className="navbar1">
          <div className="logo">
            <h1>MemoDiary</h1>
          </div>
          <div className="navItems">
            <div>
              <strong>Home</strong>
            </div>
            <div>
              <strong>About Us</strong>
            </div>
            <div>
              <strong>Contact</strong>
            </div>
            <div>
              <strong>Products</strong>
            </div>
          </div>
        </div>
        <div className="formAndTextContainer">
          <div className="designerText">
            <div className="textOne">
              <h1>Unlock Your Memories Vault</h1>
            </div>
            <div className="textTwo">
              <h1>Where Memories Find a Home</h1>
            </div>
          </div>
          <div className="form">
            
            <div className="insideForm"><div><h2>Sign In</h2></div><form className="signup-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit"><strong>Sign In</strong></button>
            </form><div>Don't have an account? <strong className='signIn'><Link to="/signup">Sign Up</Link></strong></div></div>
          </div>
        </div>
      </div>
    );
}

export default Signin;
