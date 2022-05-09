import React,{useEffect, useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {Box, Card, CardActions, CardContent, Button, Typography} from'@material-ui/core';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage'
import { busca } from '../../../services/Service';
import {useSelector} from 'react-redux'
import {TokenState} from '../../../store/tokens/tokensReducer'

function ListaTema(){
    const [listaTema,setListaTema]=useState<Tema[]>([])
    //const[token,setToken]=useLocalStorage('token')
    const token=useSelector<TokenState,TokenState["tokens"]>(
        (state)=>state.tokens
    )
    let history=useNavigate()

   async function getTemas(){
     //   e.preventDefault();
        await busca(`/temas`,setListaTema,{
            headers:{
                'Authorization':token
            }
        })
    }

    useEffect(()=>{
       if(token===''){
           alert("Você não está logado!")
           history('/login')
       }
    },[token])

    useEffect(()=>{
        getTemas()

    },[listaTema.length])

    return(
       

       <>
        
         {/* headers:{ */}
        {/* Authorization:token */}
    {/* } */}
{
    listaTema.map(tema =>(
    <Box m={2}>
        <Card variant='outlined'>
            <CardContent>
                <Typography color='textSecondary' gutterBottom>
                    Tema
                </Typography>
                <Typography variant='h5' component='h2'>
                    {tema.descricao}
                </Typography>
             
            </CardContent>
            <CardActions>
                <Box display='flex' justifyContent='center' mb={1.5}>
                   <Link to='' className='text-decorator-none'>
                   <Box mx={1}>
                       <Link to={`/formularioTema/${tema.id}`}>
                       <Button variant='contained' className='marginEsquerda' size='small' color='primary'>
                           Atualizar
                       </Button>
                       </Link>


                   </Box>
                   </Link>
                   <Link to={`/deletoTema/${tema.id}`} className='text-decorator-none'>
                    <Box mx={1}>
                      <Button variant='contained' size='small' color='secondary'>
                         Deletar
                      </Button>
                    </Box>

                   </Link>
                </Box>




            </CardActions>
        </Card>
        
        
        
        
        </Box>
    ))}
       
       
       
       
       
       </>

    );
}
export default ListaTema;