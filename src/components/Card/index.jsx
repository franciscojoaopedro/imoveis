import {styled}from "styled-components";
import {FaMapMarkerAlt} from "react-icons/fa"
import {FcMoneyTransfer,FcInfo,FcAbout} from "react-icons/fc"
import { Link } from "react-router-dom";

import  {urlApi} from "../../services/API.js"

export default function Card({thumb,tipo,cidade,endereco,valor,key,id}){
    return(
    <Container
    key={key}
    >
        <Img>
        <img src={`${urlApi}/uploads/${thumb}`} alt=""/>
        </Img>
        <Description>
            <h4><FcInfo/> {tipo}</h4>
            <Items>
                <span><FaMapMarkerAlt/>Província: {cidade}</span>
                <span><FaMapMarkerAlt/>Endereco: {endereco}</span>
                <span><FcMoneyTransfer/>Preço: {valor} </span>
            </Items>
            <Link to={`/imovel/${id}`}>Detalhes<FcAbout/></Link>
        </Description>
    </Container>
    )
}

const Container=styled.div`
width: 24%;
margin-bottom: 12px;
background-color: var(--white);
box-shadow: 4px  4px 2px 4px rgba(0,0,0,0.1);
border-radius: 10px;
`;
const Img=styled.div`
width: 100%;
img{
    width: 200px;
    height: 200px;
}
`;
const Description=styled.div`
padding: 12px;
a{
    display:flex ;
    justify-content: space-between;
    align-items: center;
    color: var(--seconday);
    font-weight: 600;
}
h4{
    font-size: 1rem ;
    font-weight: 600;
    margin-bottom: 10px;
}

`;
const Items=styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    span{
        margin-bottom: 10px;
    }
`;
