
import React from 'react';

import {Button} from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu'

import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@material-ui/core'
function NavBar(){


    return(
        <AppBar position="static">
        <Toolbar variant="dense">
            <Box style={{ cursor: "pointer" }} >
                <Typography variant="h5" color="inherit">
                    BlogPessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        home
                    </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        postagens
                    </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        temas
                    </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        cadastrar tema
                    </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
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


    )
   
}
export default NavBar;

