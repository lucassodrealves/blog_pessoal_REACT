import React, { useEffect,useState } from 'react';
import './DeletoTema.css';
import {Box,Card,CardActions,Button,CardContent, Typography} from '@material-ui/core';
import {useParams,useNavigate} from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleta } from '../../../services/Service';

import Tema from '../../../models/Tema'

import {useSelector} from 'react-redux'
import {TokenState} from '../../../store/tokens/tokensReducer'




function DeletoTema(){
let history=useNavigate()
const {id}=useParams<{id:string}>()
//const [token,setToken]=useLocalStorage('token')
const [tema,setTema]=useState<Tema>()

const token=useSelector<TokenState,TokenState["tokens"]>(
    (state)=>state.tokens
)

useEffect(()=>{
    if(id!==undefined){
        findById();
    }
},[id])

async function findById(){
    buscaId(`/temas/${id}`,tema,{headers:{
        'Authorization':id
    }})
}

useEffect(()=>{
    if(token==''){
        alert('usuário não logado!')
        history('/login')
    }
},[token])

async function sim(){
    history('/temas')
    await deleta(`/temas/${id}`,{headers:{
      'Authorization':token
      
    }})
    alert('Tema deletado com sucesso!')
}

async function n(){
    history('/temas')

}
    return(
<>
<Box m={2}>
<Card variant='outlined'>
    <CardContent>
        <Box justifyContent='center'>
            <Typography color='textSecondary' gutterBottom>
                Deseja deletar o tema?
            </Typography>
            <Typography color='textSecondary' gutterBottom>
                {tema?.descricao}
            </Typography>
        </Box>
    </CardContent>
    <CardActions>
        <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
            <Box mx={2}>
                <Button onClick={sim} variant='contained' color='primary' size='large'>
                    Sim
                </Button>
            </Box>
            <Box mx={2}>
                <Button onClick={n} variant='contained' color='secondary' size='large'>
                    Não
                </Button>
            </Box>
        </Box>
    </CardActions>
</Card>
</Box>

</>
    )}
export default DeletoTema;