import React from 'react';
import './App.css';
import { Grid } from "@material-ui/core"
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/estaticos/navBar/NavBar';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './componentes/temas/listaTema/ListaTema';
import ListaPostagem from './componentes/postagens/listaPostagem/ListaPostagem'
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletoTema from './componentes/temas/deletaTema/DeletoTema';
import CadastroPostagem from './componentes/postagens/cadastroPostagem/CadastroPostagem'
import DeletoPostagem from './componentes/postagens/deletaPostagem/DeletoPostagem'



function App() {
  return (
    <Router>
      <NavBar/>
      <div style={{ minHeight: '100vh' }}>
        <Routes>

          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastrar" element={<CadastroUsuario/>}/>
          <Route path="/temas" element={<ListaTema/>}/>
          <Route path="/postagens" element={<ListaPostagem/>}/>
          <Route path="/formularioTema" element={<CadastroTema/>}/>
          <Route path="/formularioTema/:id" element={<CadastroTema/>}/>
          <Route path="/deletoTema/:id" element={<DeletoTema/>}/>
          <Route path="/formularioPostagem" element={<CadastroPostagem/>}/>
          <Route path="/formularioPostagem/:id"element={<CadastroPostagem/>}/>
          <Route path="/deletoPostagem/:id" element={<DeletoPostagem/>}/>

        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
