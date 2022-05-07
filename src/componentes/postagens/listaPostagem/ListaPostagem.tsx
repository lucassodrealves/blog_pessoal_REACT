import React,{useEffect, useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {Box, Card, CardActions, CardContent, Button, Typography} from'@material-ui/core';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem'
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaPostagem(){
    let history=useNavigate();
    const[listaPostagem,setListaPostagem]=useState<Postagem[]>([])
    const[token,setToken]=useLocalStorage('token')

useEffect(()=>{
    if(token===''){
        alert("Você não está logado!")
        history('/login')
    }
},[token])

useEffect(()=>{
    getPostagens()

},[listaPostagem.length])

 async function getPostagens(){
     await busca(`/postagens`,setListaPostagem,{
         headers:{
             'Authorization':token
         }
     })
 }
return(
    <>
   

     {/* headers:{ */}
        {/* Authorization:token */}
    {/* } */}
  { listaPostagem.map(postagem =>(
 <Box m={2}>
     <Card variant='outlined'>
         <CardContent>
             <Typography color='textSecondary' gutterBottom>
                 Postagens
             </Typography>
             <Typography variant='h5' component='h2'>
                 {postagem.titulo} 
             </Typography>
             <Typography variant='body2' component='p'>
                 {postagem.texto}
             </Typography>
             <Typography variant='body2' component='p'>
                 {postagem.tema?.descricao}
             </Typography>
           </CardContent>
           <CardActions>
               <Box mx={1} display='flex' justifyContent='center' mb={1.5}>

                   <Link to={`/formularioPostagem/${postagem.id}`} className='text-decorator-none'>
                       <Button variant='contained' color='primary' size='small' className='marginEsquerda'>
                          Atualizar
                       </Button>
                   </Link>
               </Box>

               <Box mx={1} display='flex' justifyContent='center' mb={1.5}>
                   <Link to={`/deletoPostagem/${postagem.id}`}>
                   <Button variant='contained' color='secondary' size='small' className='marginEsquerda'>
                       Deletar
                   </Button>
                   </Link>
               </Box>
           </CardActions>
           </Card>
             </Box>
  ))}




     </>
     );
    
    }

    export default ListaPostagem;
    
   

   
    
   
     
    