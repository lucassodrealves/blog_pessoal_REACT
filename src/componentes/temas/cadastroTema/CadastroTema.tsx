import React,{useEffect, useState, ChangeEvent} from 'react'
import {Container, Typography,TextField,Button,Box} from '@material-ui/core';
import './CadastroTema.css'
import Tema from '../../../models/Tema'
import useLocalStorage from 'react-use-localstorage';
import {useNavigate,useParams} from 'react-router-dom'
import { atualiza, buscaId, cadastra } from '../../../services/Service';


function CadastroTema(){
    let history=useNavigate()
   // const[tema,setTema]=useState<Tema[]>([])
    const{id}=useParams<{id:string}>()
    const[tema,setTema]=useState<Tema>({
         id:0,
         descricao:''
    })
    const[token,setToken]=useLocalStorage('token')

function updatedModel(e:ChangeEvent<HTMLInputElement>){
   setTema({
   ...tema,
   [e.target.name]:e.target.value
})
}

useEffect(()=>{
    if(token==''){
        alert('Usuário não logado!')
        history('/login')
    }
},[token])

useEffect(()=>{
    if(id!==undefined){
        findById(id)
    }

},[id])

async function findById(id:string){
buscaId(`/temas/${id}`,setTema,{headers:{
'Authorization':token
}})
}

 async function cadastrarTema(e:ChangeEvent<HTMLFormElement>){
     e.preventDefault()

     console.log("tema:"+JSON.stringify(tema))

     if(id==undefined){
     try{console.log(tema)
     await cadastra(`/temas`,tema,setTema,{headers:{
         'Authorization':token
        }
     })
     alert('Tema criado com tranquilidade!')
    }catch(error){
        alert("Incorreção da inserção nos campos!")
    }
    }

     else{
    try{await atualiza(`/temas`,tema,setTema,{headers:
        {
            'Authorization':token
        }})
        alert('Tema atualizado')
      
     }catch(error){
        alert("Incorreção da inserção nos campos!")
    }
    }
     pega()

     
     }
     function pega(){
        history('/temas')
 }


 return(
    

<Container maxWidth="sm" className='topo'>
<form onSubmit={cadastrarTema}>
    <Typography variant='h3' component='h1' color='textSecondary' align='center'>
Formulário de Cadastro de Tema
    </Typography>
    <TextField value={tema.descricao} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='descricao' name='descricao' variant='outlined' label='descrição' fullWidth/>
    <Box className='topo'>
    <Button type='submit' variant='contained' color='primary' >
        Finalizar
    </Button>
    </Box>
</form>
</Container>

 )

}
export default CadastroTema;
