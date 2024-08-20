import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from './AdminLogin';
import AboutUs from '../src/home/AboutUs.jsx';
import Home from '../src/home/HomePage.jsx'
import LoginPage from "../src/login/LoginPage.jsx";
import Register from "../src/login/RegisterPage.jsx";
import ManageRoomPage from "../src/admin/ManageRoomPage.jsx";

function Approuter() {
    return (
        <Router>
            <Routes>
               <Route path="/AdminLogin" element={<AdminLogin/>}/>  
               <Route path="/aboutus" element={<AboutUs/>}/>
               <Route path="/login" element={<LoginPage/>}/>
               <Route path="/register" element={<Register/>}/>
               <Route path="/rooms" element={<ManageRoomPage/>}/>
               <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    );
}
export default Approuter;
