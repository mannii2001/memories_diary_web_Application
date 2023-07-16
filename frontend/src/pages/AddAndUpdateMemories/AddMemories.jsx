import { useState } from 'react'
import React  from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Addmemo.css';
import { useNavigate } from 'react-router';
import axios from 'axios';

const AddMemories = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform form submission or data handling here
    if(!title || !date || !description){
      alert("All field are mandatory");
      return;
    }
    
      try {
        const token = localStorage.getItem("jwtToken"); // Get JWT token from local storage
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        };

        // Request body with title and description as a string
        const requestBody = JSON.stringify({
          "title": `${title}`,
          "date":`${date}`,
          "description": `${description}`
        });

        // Make the POST request
        const response = await axios.post('/Diarymemories', requestBody, { headers });

        // Handle the response
        console.log(response.data);
        alert("Your Memory is Created");
        navigate('/');
       
      } catch (error) {
        console.error(error);
        
      }
      
    
  };
  return (
    <div>
      <Navbar/>
      <div className='formContainerAdd'>
        <h1>Add New Memories</h1>
      <form className="Addform" onSubmit={handleSubmit}>
      <label htmlFor="title" className="form-label">
        Title:
      </label>
      <input
        type="text"
        id="title"
        className="form-input form-input-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="date" className="form-label">
        Date:
      </label>
      <input
        type="text"
        id="date"
        className="form-input form-input-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="description" className="form-label">
        Description:
      </label>
      <textarea
        id="description"
        className="form-input form-input-description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
      </div>
    </div>
  )
}

export default AddMemories
