import "./App.css";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Footer } from './components/public/Footer';
import Main from './components/public/Main';
import { NavBar } from './components/public/NavBar';
import { Detail } from './components/public/Detail';
import { UserForm } from './components/public/UserForm';



function App() {
  return (
    <div>
  
      <NavBar />
      <React.StrictMode> 
    
      <Routes>
        <Route exact path={"/"} element={<Main/>}/>
        <Route path={"/details/:id"} element={<Detail/>}/>
        <Route path={"/user-form"} element={<UserForm/>}/> 
      </Routes>
      
  </React.StrictMode> 
      <Footer />
     
    </div>
  );
}

export default App;
