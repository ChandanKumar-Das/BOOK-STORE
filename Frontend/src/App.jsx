import React from "react";
import Home from "./Home/home";
import Signup from "./components/Signup";
import Courses from "../src/Courses/courses";
import ForgotPassword from "./components/ForgetPassword";
import Login from "./components/LogIn";
import Contact from "./components/Contact";
import About from "./components/About"
import { Routes ,Route} from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      {/* <Home />
      <Course /> */}

      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/Course" element={<Courses/>}/>
        <Route path ="/Signup" element={<Signup/>}/>
        <Route path ="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path ="/Login" element={<Login/>}/>
        <Route path ="/Contact" element={<Contact/>}/>
        <Route path ="/About" element={<About/>}/>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
