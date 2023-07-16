import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './details.css';
import axios from 'axios';
import { useContext } from 'react';
import IdContext from '../../contextApi/IdContext';

const MemoryDetails = () => {
  const {currentId} = useContext(IdContext);
  const[inputField,setInput] = useState("");
  const [SingleData,setSingleData] = useState({});
  const[commentData,setCommentData] = useState([]);

  const fetch = async()=>{
    try {
      const token = localStorage.getItem("jwtToken"); // Get JWT token from local storage
      const response = await axios.get(`/Diarymemories/${currentId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
        },
      });
     
      console.log(response.data);
      setSingleData(response.data);
      // Handle successful response here
    } catch (error) {
      console.error(error);
    }
  }

  const fetchComments = async()=>{
    try {
      const token = localStorage.getItem("jwtToken"); // Get JWT token from local storage
      const response = await axios.get(`/comments/${currentId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
        },
      });
     
      console.log(response.data);
      setCommentData(response.data);
      // Handle successful response here
    } catch (error) {
      console.error(error);
    }
  }

  const AddComments = async() =>{
    if(!inputField){
      alert("Cannot Post empty Comment");
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
        "title": `${inputField}`,
        "memory_id":`${currentId}`
      });

      // Make the POST request
      const response = await axios.post(`/comments/${currentId}`, requestBody, { headers });

      // Handle the response
      console.log(response.data);
      alert("Your Comment is Created");
      setInput('');
      fetchComments();
      // navigate('/');
     
    } catch (error) {
      console.error(error);
      
    }
    
  }


  useEffect(()=>{
    fetch();
    fetchComments();
    // eslint-disable-next-line
  },[])


  return (
    <div>
      <Navbar/>
      <div className='DetailsDiv'>
        <h1>Title: {SingleData.title}</h1>
        <h2>Date: {SingleData.date}</h2>
        <h2>Description: {SingleData.description}</h2>
      </div>
      <div className='commentsDiv'>
        <h2>All your comments will appear here</h2>
        {commentData && commentData.map((e)=>{
          return <h3><strong>{e.title}</strong></h3>
        })}
        <div className='commentInputDiv'>
          <h3>Add New Comment</h3>
          <div><input type="text" className='commentInput' value={inputField} onChange={(e)=>setInput(e.target.value)}/> <button className='cmtbtn btn btn-warning' onClick={AddComments}>Add Comment</button></div>
        </div>
      </div>
    </div>
  )
}

export default MemoryDetails
