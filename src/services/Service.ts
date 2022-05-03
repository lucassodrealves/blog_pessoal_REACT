import axios from 'axios';

export const api = axios.create({
    baseURL:'https://bloguipessoar.herokuapp.com'
})

export const cadastroUsuario=async(url:any,dados:any,setDados:any)=>{
const resposta=await api.post(url,dados)
setDados(resposta.data)
}

export const login = async(url:any,dados:any,setDados:any)=>{
    const resposta = await api.post(url,dados)// /usuarios/logar
    setDados(resposta.data.token)

}


