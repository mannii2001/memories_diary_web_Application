import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css';
import { useNavigate } from "react-router";
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      if(!username || !email || !password){
        alert("All fields are Mandatory");
        return;
      }
      if(username.length < 4){
        alert("Username Length Should be more than or equal to 4.")
        return;
      }
      try {
       
        const requestBody = {
          "username": `${username}`,
          "email": `${email}`,
          "password": `${password}`,
        };
  
        const response = await axios.post('/DiaryUsers/register', JSON.stringify(requestBody), {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        // Handle successful response here
        console.log(response.data)
        navigate('/signin');
  
      } catch (error) {
        // Handle error response here
        
        console.error(error.request.status);
        if(error.request.status === 400){
          alert("User is already registered With Us! Please LogIn to Use Site.")
          navigate('/signin');
        }
      }
      
      // Handle form submission here
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
            
            <div className="insideForm"><div><h2>Sign Up Today</h2></div><form className="signup-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
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
              <button type="submit"><strong>Sign Up</strong></button>
            </form><div>Already Registered? <strong className='signIn'><Link to="/signin">Sign In</Link></strong></div></div>
          </div>
        </div>
      </div>
    );
}

export default Signup
