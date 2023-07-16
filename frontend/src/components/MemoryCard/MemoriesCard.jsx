import React from "react";
import "./card.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { useContext } from 'react';
import IdContext from '../../contextApi/IdContext';

const MemoriesCard = (props) => {
  const {setCurrentId} = useContext(IdContext);
  // eslint-disable-next-line
  const navigate = useNavigate();
  const { _id, title, date, description } = props;
  console.log(props);

  const DeleteMemory = async () => {
    alert("Are you sure to delete this memory.");
    try {
      // Retrieve JWT token from local storage
      const token = localStorage.getItem("jwtToken");

      // Set the request headers with the JWT token
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Make the DELETE request
      const response = await axios.delete(`/DiaryMemories/${_id}`, { headers });

      // Handle the response
      console.log(response.data);
      alert(`Your ${title} is Deleted`);
      // navigate("/");
      window.location.reload();
    } catch (error) {
      // Handle the error
      console.error(error);
      alert("Some Error Encountered While Deleting Memory");
    }
  };
  const updateId = ()=>{
    setCurrentId(_id);
    navigate('/updatememories')
  }
  const details = ()=>{
    setCurrentId(_id);
    navigate('/memoriesDetails')
  }
  return (
    <div className="mainDetailsContainer">
      <div className="memoryHeading">
        <h3>{title}</h3>
        <h4>{date}</h4>
      </div>
      <div className="descriptionDiv">{description}</div>
      <div className="buttonsDiv">
        <button className="CardButtons btn btn-success" onClick={details}>Details</button>
        <button className="CardButtons btn btn-info" onClick={updateId}>Update</button>
        <button className="CardButtons btn btn-danger" onClick={DeleteMemory}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MemoriesCard;
