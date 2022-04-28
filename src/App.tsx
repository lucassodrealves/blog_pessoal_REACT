import React from 'react';
import './App.css';
import { Grid } from "@material-ui/core"
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/estaticos/navBar/NavBar';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';


function App() {
  return (
    <Router>
      <NavBar/>
      <div style={{ minHeight: '100vh' }}>
        <Routes>

          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/> 
          <Route path="/login" element={<Login/>}/>


        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
