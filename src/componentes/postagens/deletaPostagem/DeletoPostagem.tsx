import React,{useState, useEffect} from 'react';
import {Box,Card,CardContent,CardActions,Typography,Button} from '@material-ui/core'
import useLocalStorage from 'react-use-localstorage';
import {useParams,useNavigate} from 'react-router-dom'

import Postagem from '../../../models/Postagem'
import { buscaId, deleta } from '../../../services/Service';
function DeletoPostagem(){
    const {id}=useParams<{id:string}>()
    let history=useNavigate()
    const[postagem,setPostagem]=useState<Postagem>()
    const[token,setToken]=useLocalStorage('token')

useEffect(()=>{
if(token==''){
    alert('usuário não logado!')
    history('/login')
}
},[token]
)

async function findById(){
    buscaId(`/postagens/${id}`,setPostagem,{headers:{
        'Authorization':token
    }})
}

useEffect(()=>{
    if(id!=undefined)
    findById()
},[id])

async function sim(){
    history('/postagens')
    deleta(`/postagens/${id}`,{headers:{
        'Authorization':token
    }})
    alert('Postagem deletada com sucesso!')

}

async function n(){
     history('/postagens')
}




return(
    <Box m={2}>
        <Card variant='outlined'>
            <CardContent>
                <Box justifyContent='center'>
                <Typography color='textSecondary' gutterBottom>
                    Deseja deletar a postagem?
                </Typography>
                <Typography color='textSecondary' gutterBottom>
                    {postagem?.titulo}
                </Typography>
                </Box>
            </CardContent>
            <CardActions>
             <Box display='flex'>
                 <Box mx={2}>
                     <Button onClick={sim} variant='contained' color='primary' size='large' >
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

)}
export default DeletoPostagem