import { useEffect, useState } from "react";
import { styled } from "styled-components"
import CardS from "../../components/Card"
import Input from "../../components/Input"
import {FcSearch}from "react-icons/fc"
import Api from "../../services/API"
import Categoria from "../../components/Categoria";



export default function PaginaDeImoveis(){
    const [imoveis,setImoveis]=useState([])
    const [textInput,setTextInput]=useState('')
    useEffect(  () =>{
        pesquisarImoveis()
         Api(`https://srv-imoveis.onrender.com/pesquisar?pesquisar=${textInput}`)
        .then(response=>{
            setImoveis(response.data.imovel)
        })
        .catch((error)=>{console.log(error)})
    },[textInput])

  
    const pesquisarImoveis=async ()=>{
    } 
    console.log("são imoves",imoveis)
    
    return(
    <Container>
       <BarraPesquisa>
        <Input
        type="search"
        placeholder="pesquisar imoveis"
        value={textInput}
        onChange={(event)=>setTextInput(event.target.value)}
        />
       <a href="">
        <FcSearch  onClick={()=>alert(textInput)} size={32} />
       </a>
       </BarraPesquisa>
    <ContainerFlex>
        <Categoria
        
        />
        <ListaImoveis>
            {
           imoveis.map((item)=>( <CardS
            key={item.id}
            thumb={item.thumb}
            tipo={item.tipo}
            endereco={item.endereco}
            valor={item.valor}
            cidade={item.cidade}
            id={item.id}
           />))}
          {/*
           <CardS/>
         <CardS/>
         <CardS/>
         <CardS/>
         <CardS/>
         <CardS/>
          */
        }
            
         
        </ListaImoveis>
</ContainerFlex>
</Container>
    )
}

const Container=styled.div`
position: relative;
    display: flex;
    padding: 20px 60px;
    flex-direction: column;
   
    
`
const ContainerFlex=styled.div`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
`
const BarraPesquisa=styled.div`
margin-top: 25px;
width: 50%;
gap: 10px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 25px;
a{
    padding: 5px;
    background: var(--blue);
}
input{
    align-items: center;
}
`;
const ListaImoveis=styled.div`
width: 100%;
height: auto;

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 10px;
flex-basis: 90%;
`;
