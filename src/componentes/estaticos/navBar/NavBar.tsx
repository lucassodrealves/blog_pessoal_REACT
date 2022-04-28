
import React from 'react';

import {Link} from 'react-router-dom';

//import {Button} from "@material-ui/core";

//import MenuIcon from '@material-ui/icons/Menu'
import './NavBar.css';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@material-ui/core'
function NavBar(){


    return(
        <AppBar position="static">
        <Toolbar variant="dense">
            <Box className='cursor'  >
                <Typography variant="h5" color="inherit">
                    BlogPessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        home
                    </Typography>
                </Box>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        postagens
                    </Typography>
                </Box>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        temas
                    </Typography>
                </Box>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        cadastrar tema
                    </Typography>
                </Box>
                <Link to='/login' className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        logout
                    </Typography>
                </Box>
                </Link>
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


    )
   
}
export default NavBar;

