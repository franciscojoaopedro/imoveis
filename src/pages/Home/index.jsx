import {styled} from "styled-components"
import Card from "../../components/Card"
import {FcSearch} from "react-icons/fc"
import Destaques from "../../components/destaques";
import Api from "../../services/API";
import { useEffect, useState } from "react";
export default function Home(){
    /*const Cards=[]
    for(let i=0;i<4;i++){
        Cards.push(<Card key={i}></Card>);
    }
    */
const [imobi,setImobi]=useState([])
useEffect(()=>{
    Api.get("/findallimobis")
    .then((response)=>setImobi(response.data.imoveis))
    .catch((error)=>console.log(error))
},[])
    return(
        <>
            <Destaques/>
            <Header>
                <h2><FcSearch/> Encontra a casa dos teus sonhos. </h2>
            </Header>
            <Wrapper>
                {imobi.map(item=>(
                    <Card
                    key={item.id}
                    thumb={item.thumb}
                    tipo={item.tipo}
                    endereco={item.endereco}
                    valor={item.valor}
                    cidade={item.cidade}
                    id={item.id}
                    />
                ))}
            </Wrapper>
        </>
    )
}

const Wrapper=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
padding: 25px 150px;
`
const Header=styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 25px 150px;
`
