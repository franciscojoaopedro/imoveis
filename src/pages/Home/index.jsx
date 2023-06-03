import {styled} from "styled-components";
import {FcSearch} from "react-icons/fc"
import {MdTerrain} from "react-icons/md"
import {BsFillBuildingFill, BsFillBuildingsFill} from "react-icons/bs"

import Destaques from "../../components/destaques";
import Api from "../../services/API";
import { useEffect, useState } from "react";
import CardS from "../../components/Card";
import {GiHouse} from "react-icons/gi"
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
                <h2><BsFillBuildingFill/></h2>
                <h2><GiHouse/></h2>
                <h2><MdTerrain/></h2>
                <h2><BsFillBuildingsFill/></h2>
                <h2><BsFillBuildingFill/></h2>
                <h2><GiHouse/></h2>
                <h2><MdTerrain/></h2>
                <h2><BsFillBuildingsFill/></h2>
            </Header>
            <Wrapper>
                {/*imobi.map(item=>(
                    <CardS
                    key={item.id}
                    thumb={item.thumb}
                    tipo={item.tipo}
                    endereco={item.endereco}
                    valor={item.valor}
                    cidade={item.cidade}
                    id={item.id}
                    />
                ))*/}
                <CardS/>
                <CardS/>
                <CardS/>
                <CardS/>
                <CardS/>
                <CardS/>
            </Wrapper>
        </>
    )
}

const Wrapper=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding: 25px 50px;
gap: 10px;
`;

const Header=styled.div`

display: flex;
justify-content: space-around;
align-items: center;
padding: 25px 150px;
background: #fff;
gap: 2px;
h2{
    margin: 0px 10px;
    color: var(--gray);
    cursor: pointer;
    animation:  infinites 0.5s both  forwards infinite;
}
h2:hover{
    color: var(--blue);
}
&{

}

@keyframes infinites {
    0%{
        transform: translateX(-1000px);
    }
    50%{
        transform: translateX(0px);
    }
    100%{
        transform: translateX(1000px);
    }
}
`
