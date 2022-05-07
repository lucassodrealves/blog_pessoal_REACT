import React,{useState,useEffect, ChangeEvent} from 'react';
import {Container,Typography,TextField,Button,Select,FormControl,FormHelperText,MenuItem,InputLabel} from '@material-ui/core';
import './CadastroPostagem.css';
import {useNavigate,useParams} from 'react-router-dom';
import Postagem from '../../../models/Postagem'
import useLocalStorage from 'react-use-localstorage';
import { atualiza, busca, buscaId, cadastra } from '../../../services/Service';
import Tema from '../../../models/Tema'
import { TextFormatSharp } from '@material-ui/icons';
import { isTemplateSpan } from 'typescript';



function CadastroPostagem(){
    const{id}=useParams<{id:string}>()
    const[tema,setTema]=useState<Tema[]>([]);
    let history=useNavigate()
    const[temaE,setTemaE]=useState<Tema>({
        id:0,
        descricao:''
    })
    const[postagem,setPostagem]=useState<Postagem>({
        id:0,
        titulo:'',
        texto:'',
        tema:null

    })
    const[token,setToken]=useLocalStorage('token')

    function updatedModel(e:ChangeEvent<HTMLInputElement>){
        setPostagem({
            ...postagem,
            [e.target.name]:e.target.value,
            tema:temaE

        })

    }

    useEffect(()=>{
        if(token==''){
            alert('usuário não logado!')
            history('/login')
        }

    },[token])

    useEffect(()=>{
        setPostagem({
        ...postagem,
        tema:temaE

         } )},[temaE])

    useEffect(()=>{
        getTemas()
        if(id!==undefined){
            findByIdPostagem(id)
        }
    },[id])
async  function getTemas(){
        busca(`/temas`,setTema,{headers:{
            'Authorization':token
        }})}

    async function findByIdPostagem(id:string){
        buscaId(`/postagens/${id}`,setPostagem,{headers:{
            'Authorization':token
        }})
    }

    async function cadastraPostagem(e:ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if(id!==undefined){
            try{await atualiza(`/postagens`,postagem,setPostagem,{headers:{
                'Authorization':token
            }})
            alert('Postagem atualizada!')
        }catch(error){
                alert('Postagem não atualizada!Verifique a quantidade de carácteres na inserção dos campos e tente novamente.')
            }}
        
        else{
            try{
                await cadastra(`/postagens`,postagem,setPostagem,{headers:{
                    'Authorization':token
                }})
                alert('Postagem cadastrada!')
            }catch(error){
                alert('Postagem não cadastrada!Verifique a quantidade de carácteres na inserção dos campos e tente novamente.')
            }
               
        }
        volta()
       
        }
        function volta(){
            history('/postagens')


        
    }

    return(
<Container maxWidth='sm' className='topo'>
<form onSubmit={cadastraPostagem}>
    <Typography variant='h3' component='h1' color='textSecondary' align='center'>
        Formulário de cadastro de postagem
    </Typography>
    <TextField value={postagem.titulo} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)} variant='outlined' name='titulo' id='titulo' label='título' margin='normal' fullWidth/>
    <TextField value={postagem.texto} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)}variant='outlined' id='texto' name='texto' margin='normal' label='texto' fullWidth/>

 <FormControl>
     <InputLabel id='demo-simple-select-helper-label'>Tema</InputLabel>
     <Select
      labelId='demo-simple-select-helper-label'
       id='demo-simple-select-helper-label'
       onChange={(e)=>buscaId(`/temas/${e.target.value}`,setTemaE,{headers:{
           'Authorization':token
       }})}>
       {
           tema.map(temaE=>(
      <MenuItem value={temaE.id}>{temaE.descricao}</MenuItem>

             ))

       }
      </Select>
      <FormHelperText>
          Escolha um tema para a postagem
      </FormHelperText>
      <Button type='submit' variant='contained' color='primary'>
          Finalizar
      </Button>
 </FormControl>

</form>


</Container>


    )
}
    

export default CadastroPostagem;
