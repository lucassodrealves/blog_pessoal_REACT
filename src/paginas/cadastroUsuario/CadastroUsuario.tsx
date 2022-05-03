import React, { useState, useEffect, ChangeEvent } from 'react';
import {Button,Box,Grid, TextField, Typography} from '@material-ui/core';
import Usuario from '../../models/Usuario';
import {cadastroUsuario} from '../../services/Service'
import './CadastroUsuario.css';
import {Link, useNavigate} from 'react-router-dom'
import { userInfo } from 'os';

function CadastroUsuario(){
    let history= useNavigate();
    const[confirmarSenha,setConfirmarSenha]=useState<String>('');
    const [usuarioCadastro,setUsuarioCadastro]= useState<Usuario>({
        id:0,
        nome:'',
        usuario:'',
        senha:'',
        foto:''
    
    
    })
    function confirmarSenhaHandle(e:ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }
    const[usuarioResult,setUsuarioResult]=useState<Usuario>({
        id:0,
        nome:'',
        usuario:'',
        senha:'',
        foto:''

    })


    
    function updateModel(e:ChangeEvent<HTMLInputElement>){
        setUsuarioCadastro({
            ...usuarioCadastro,
            [e.target.name]:e.target.value
        })
    }
    
    useEffect(()=>{
        if(usuarioResult.id != 0){
            history.caller('/login')
        }
    },[usuarioResult])
    
    
    
    
    
    
    async function cadastrar(e:ChangeEvent<HTMLFormElement>){
        e.preventDefault();
       if(confirmarSenha==usuarioCadastro.senha){
            cadastroUsuario(`/usuarios/cadastrar`,usuarioCadastro,setUsuarioResult);
            alert('Usuário cadastrado com tranquilidade!')
    }
        else{
            alert('Dados do usuário não consistentes.Erro ao tentar cadastrar!');
    
    
        }
    }
        // console.log('usuarioLogin:' +Object.values(usuarioLogin));
    
    
    
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
           <Grid item xs={6} className='imgC'>

           </Grid>

           <Grid item xs={6} alignItems='center'>
              <Box paddingX={9}>
               <form onSubmit={cadastrar}>
                   <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='tituloC'>
                       Cadastre-se
                   </Typography>

                   <TextField value={usuarioCadastro.nome} onChange={(e:ChangeEvent<HTMLInputElement>)=>updateModel(e)} id='nome' label='nome' name='nome' variant='outlined' margin='normal' fullWidth/>
                   <TextField value={usuarioCadastro.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=>updateModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>
                   <TextField value={usuarioCadastro.foto} onChange={(e:ChangeEvent<HTMLInputElement>)=>updateModel(e)} id='foto' label='foto' name='foto' variant='outlined' margin='normal' fullWidth/>
                   <TextField value={usuarioCadastro.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=>updateModel(e)} type='password' id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth/>
                   <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>)=>confirmarSenhaHandle(e)} type='password' id='confirmarsenha' label='confirmar senha' variant='outlined' name='confirmarsenha' margin='normal' fullWidth/>
                     
                     <Box marginTop={2} textAlign='center'>
                   <Button type='submit' variant='contained' color='primary' className='button'>Cadastrar</Button>
                   <Link to='/login'>
                   <Button variant='contained' color='secondary' className='button'>Cancelar</Button>
                   </Link>
                   </Box>
                   
               </form>
               </Box>
           </Grid>




           
        </Grid>
    );



}

export default CadastroUsuario