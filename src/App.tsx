import React from 'react';
import './App.css';
import {Grid} from "@material-ui/core"
import Home from './paginas/home/Home';
import NavBar from './componentes/estaticos/navBar/NavBar';
import Footer from './componentes/estaticos/footer/Footer'
let name='lucas'
function App() {
  return (
       <>
       <NavBar/>
       <Home/>
       <Footer/>
     
       
       {/* <Grid container spacing={3}> 
             <Grid item xs={12} sm={12}>
             <Home/>
             </Grid>
             <Grid item xs={12} sm={6}>
             <Home/>
             </Grid>
             <Grid item xs={12} sm={6}>
              <Home/>
             </Grid>
             <Grid item xs={12} sm={3}>
              <Home/>
             </Grid>
             <Grid item xs={12} sm={3}>
               <Home/>
             </Grid>
             <Grid item xs={12} sm={3}>
               <Home/>
             </Grid>
             <Grid item xs={12} sm={3}>
               <Home/>
             </Grid>





       </Grid>
       
  */}
       
       </>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bem vindo a um projeto REACTJS {name}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  )
}

export default App;
