import {styled}from "styled-components";
import {FaMapMarkerAlt} from "react-icons/fa"
import {FcMoneyTransfer,FcInfo,FcAbout} from "react-icons/fc"
import { Link } from "react-router-dom";
import  {urlApi} from "../../services/API.js"

export default function CardS({thumb,key,tipo,cidade,endereco,valor,id}){

    let image=`${urlApi}/uploads/${thumb}`
    return(

    <Container
    key={key}
    >
        <Description>
        <Img>
        <img src={image} alt=""/>
        </Img>
            <h4><FcInfo/> {tipo}</h4>
            <Items>
                <span><FaMapMarkerAlt/>Província: {cidade}</span>
                <span><FaMapMarkerAlt/>Endereco: {endereco}</span>
                <span><FcMoneyTransfer/>Preço: {valor} <b>KZ</b> </span>
            </Items>
            <Link to={`/imovel/${id}`}>Detalhes<FcAbout/></Link>
        </Description>
    </Container>
    )
}

const Container=styled.div`
width: 18rem;
margin-bottom: 12px;
background-color: var(--white);
box-shadow: 4px  4px 2px 4px rgba(0,0,0,0.1);
border-radius: 10px;
`;
const Img=styled.div`
width: 100%;
img{
    width:100%;
    height: 180px;
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
