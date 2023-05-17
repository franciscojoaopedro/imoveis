import { useEffect, useState } from "react";
import { styled } from "styled-components"
import CardS from "../../components/Card"
import Input from "../../components/Input"
import {FcSearch}from "react-icons/fc"
import {FaBuilding}from "react-icons/fa"
import Api from "../../services/API"



export default function PaginaDeImoveis(){
    const [imoveis,setImoveis]=useState([])
    const [textInput,setTextInput]=useState('')
    
    useEffect(  () =>{
        pesquisarImoveis()
         Api(`http://localhost:8000/pesquisar?pesquisar=${textInput}`)
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
       <Categoria>
        <Text>
            <h3>Categoria</h3>    
            <div>
                <ul>
                    <li value="Vivendas"  onClick={()=>setTextInput("Vivendas")} >Vivendas</li>
                   <li  value="Apartamentos"  onClick={()=>setTextInput("Apartamento")}  ><FaBuilding/> Apartamentos</li>
                   <li value="Terreno"onClick={()=>setTextInput("Terreno")} >Terreno</li>
                   <li value="Condominio" onClick={()=>setTextInput("Condominio")} >Condomio</li>
                   <li value="Loja" onClick={()=>setTextInput("Loja")}>Lojas</li>
                   <li   value="Imoveis" onClick={()=>setTextInput("")}>Outros imoveis</li>
                </ul>
            </div>
        </Text>
       </Categoria>
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
    justify-content: center;
    align-items: center;
    
`
const Text=styled.div`
padding: 10px;
display: flex;
justify-content:flex-start ;
align-items: flex-start;
flex-direction: column;

h3{
    color: #fff;
    font-weight: 700;
}
div{
    ul{
        li{
            font-size: 20px;
            color: #cececc;
            font-weight: 700;
            margin-bottom: 5px;
            cursor: pointer;
               
        }

        li:hover{
           
                    padding: 5px 20px ;
                    color: #cececc;
                    border-bottom:  3px solid #fff;
             
            
        }
    }
}
`
const ContainerFlex=styled.div`
        display: flex;
        justify-content: center;
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

`

const ListaImoveis=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 10px;
flex-basis: 100%;
`
const Categoria=styled.div`
left: 0;
width: 30%;
background: var(--blue);
display: flex;
justify-content: flex-start;
align-items: flex-start;
height: 600px;
flex-direction: column;


`