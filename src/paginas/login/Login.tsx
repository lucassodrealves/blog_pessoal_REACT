import React from 'react';
import './Login.css';
import { Grid, Box, Typography, TextField } from '@material-ui/core'
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core'

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'  >
            <Grid item xs={6} alignItems='center'>
            <Box paddingX={20}>

                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto'>
                            Entrar
                        </Typography>
                        <TextField variant='outlined' label='usuário' id='usuario' name='usuario' margin='normal' fullWidth />
                        <TextField variant='outlined' label='senha' id='senha' name='senha' type='password' margin='normal' fullWidth />
                        <Box marginTop={2} textAlign=' center'>
                            <Link to='/home' className='text-decorator-none'>
                               <Button type='submit' variant='contained' color='primary'> 
                                   Logar
                               </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' align='center'>
                                ainda não tem conta queride?
                            </Typography>
                        </Box>
                        <Typography variant='subtitle1' align='center' className='texto'>Cadastre-se</Typography>
                    </Box>
                           
                </Box>

            </Grid>

            <Grid item xs={6} alignItems='center' className='img'>
            {/* <img src="../../assets/img/coruja.jpg" alt="imagem atrativa na tela de login" width="75px" height="75px"/> */}
            

               
            </Grid>

        </Grid>
    );

}

export default Login;