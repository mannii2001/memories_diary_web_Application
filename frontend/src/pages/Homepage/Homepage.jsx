import React, { useEffect, useState } from "react";
import "./Homepage.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import MemoriesCard from "../../components/MemoryCard/MemoriesCard";
import { useNavigate } from "react-router";
import axios from "axios";


const Homepage = () => {
  const navigate = useNavigate();
  const[MemoriesData,setMemoData] = useState([]);

  const validateUser = async () => {
    try {
      const token = localStorage.getItem("jwtToken"); // Get JWT token from local storage
      const response = await axios.get("/Diarymemories", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
        },
      });
     
      console.log(response.data);
      setMemoData(response.data);
      // Handle successful response here
    } catch (error) {
      console.error(error);
      navigate("/signin");
    }
    
  };

  useEffect(() => {
    if (localStorage.getItem("jwtToken") === undefined) {
    
      navigate("/signup");
    }
    validateUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Navbar />
      <div className="heading">
        <h1>All your memories will be displayed here.</h1>
      </div>
      <div>
        {MemoriesData.map((e)=>{
          return <MemoriesCard  key={e._id} _id={e._id.toString()} title={e.title} date={e.date} description={e.description}/>
        })}
      </div>
      <div className="btnDiv">
        <Link to="/addMemories">
          <button className="addbtn">Add Memories</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
