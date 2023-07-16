import "./App.css";
import { Routes, Route } from "react-router-dom"
import Signup from "./pages/SignUp/Signup";
import Signin from './pages/SignINPage/Signin'
import Homepage from "./pages/Homepage/Homepage";
import AddMemories from "./pages/AddAndUpdateMemories/AddMemories";
import MemoryDetails from "./pages/MemoryDetailsPage/MemoryDetails";
import UpdateMemory from "./pages/AddAndUpdateMemories/UpdateMemory";

function App() {
  return(<>
    <Routes>
    <Route path="/" element={ <Homepage/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/signin" element={ <Signin/> } />
        <Route path="/addMemories" element={<AddMemories/>}/>
        <Route path="/memoriesDetails" element={<MemoryDetails/>}/>
        <Route path="/updatememories" element={<UpdateMemory/>}/>
      </Routes>
      
  </>)
}

export default App;
