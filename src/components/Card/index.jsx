import {styled}from "styled-components";
import CasaImagem from "../../assets/casa_unsplash_1.jpg";
import {FaMapMarkerAlt} from "react-icons/fa"
import {FcMoneyTransfer,FcGlobe,FcInfo,FcAbout,FcRight} from "react-icons/fc"

export default function Card(){
    return(
    <Container>
        <Img>
        <img src={CasaImagem} alt=""/>
        </Img>
        <Description>
            <h4><FcInfo/> Apartamento</h4>
            <Items>
                <span> <FaMapMarkerAlt/> Luanda,Talatona</span>
                <span><FcMoneyTransfer/>  580.000,00 KZ</span>
            </Items>
            <a href="#">Detalhes<FcAbout/></a>
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
    width: 100%;
    height: auto;
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
