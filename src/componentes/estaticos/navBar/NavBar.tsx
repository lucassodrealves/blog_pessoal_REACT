
import React from 'react';

import {Link,useNavigate} from 'react-router-dom';

//import {Button} from "@material-ui/core";

//import MenuIcon from '@material-ui/icons/Menu'
import './NavBar.css';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import {toast} from 'react-toastify'
import { PauseCircleOutline } from '@material-ui/icons';

function NavBar(){

 //const [token,setToken]=useLocalStorage('token')
 const token=useSelector<TokenState,TokenState["tokens"]>(
     (state)=>state.tokens
 )
 const dispatch=useDispatch()
 let history=useNavigate()

 function logout(){
     dispatch(addToken(''))
     toast.info('Usuário deslogado!',{
         position:'top-right',
         autoClose:1999,
         hideProgressBar:false,
         closeOnClick:true,
         pauseOnHover:false,
         draggable:false,
         theme:'light',
         progress:undefined

     }

     )

     history('/login')

 }

 var navBarComponent;

 if(token !==""){
     navBarComponent=
     <AppBar position="static">
        <Toolbar variant="dense">
            <Box className='cursor'  >
                <Typography variant="h5" color="inherit">
                    BlogPessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Box mx={1} className='cursor'>
                    <Link to='home' className='text-decorator-none colorN'>
                    <Typography variant="h6" color="inherit">
                        home
                    </Typography>
                    </Link>
                </Box>
                <Box mx={1} className='cursor'>
                    <Link to='/postagens' className='text-decorator-none colorN'>
                    <Typography variant="h6" color="inherit">
                        postagens
                    </Typography>
                    </Link>
                </Box>
                <Box mx={1} className='cursor'>
                    <Link to='/temas' className='text-decorator-none colorN'>
                    <Typography variant="h6" color="inherit">
                        temas
                    </Typography>
                    </Link>
                </Box>
                <Box mx={1} className='cursor'>
                    <Link to='/formularioTema' className='text-decorator-none colorN'>
                    <Typography variant="h6" color="inherit">
                        cadastrar tema
                    </Typography>
                    </Link>
                </Box>
             
                <Box mx={1} className='cursor text-decorator-none' onClick={logout}>
                    <Typography variant="h6" color="inherit">
                        logout
                    </Typography>
                </Box>
            </Box>

        </Toolbar>
    </AppBar>
        /*<AppBar position="static" className='back'>
        <Toolbar className='bar'>
            <Typography className='title' variant="h6">
                Rara
            </Typography>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon/>
            </IconButton>
        </Toolbar>
    </AppBar>*/

 }

    return(
        <>
        {navBarComponent}
        </>
        


    )
   
}
export default NavBar;

