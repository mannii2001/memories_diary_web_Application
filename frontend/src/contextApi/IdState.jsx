import React, { useState } from "react";
import IdContext from "./IdContext";


const IdState = (props) => {
  const[currentId,setCurrentId] = useState("");
  return (
    <IdContext.Provider value={{currentId,setCurrentId}}>
      {props.children}
    </IdContext.Provider>
  );
};

export default IdState;