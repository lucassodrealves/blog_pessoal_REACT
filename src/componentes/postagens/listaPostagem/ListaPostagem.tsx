import React from 'react';
import { Link } from 'react-router-dom';
import {Box, Card, CardActions, CardContent, Button, Typography} from'@material-ui/core';
import './ListaPostagem.css';

function ListaPostagem(){
return(
    <>

 <Box m={2}>
     <Card variant='outlined'>
         <CardContent>
             <Typography color='textSecondary' gutterBottom>
                 Postagens
             </Typography>
             <Typography variant='h5' component='h2'>
                 Título da Postagem
             </Typography>
             <Typography variant='body2' component='p'>
                 Texto da Postagem
             </Typography>
             <Typography variant='body2' component='p'>
                 Tema
             </Typography>
           </CardContent>
           <CardActions>
               <Box mx={1} display='flex' justifyContent='center' mb={1.5}>

                   <Link to='' className='text-decorator-none'>
                       <Button variant='contained' color='primary' size='small' className='marginEsquerda'>
                          Atualizar
                       </Button>
                   </Link>
               </Box>

               <Box mx={1} display='flex' justifyContent='center' mb={1.5}>
                   <Button variant='contained' color='secondary' size='small' className='marginEsquerda'>
                       Deletar
                   </Button>
               </Box>
           </CardActions>
           </Card>
             </Box>




     </>
     );
    
    }

    export default ListaPostagem;
    
   

   
    
   
     
    