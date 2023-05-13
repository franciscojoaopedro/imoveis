import { styled } from "styled-components";
import TopBanner from "../../components/TopBanner";
import Profile from "../../components/Profile";

export default function Imobi(){
    return(
       <>
        <TopBanner/>
        <Container>
            <Left>
                <Thumb>
                    <img src="apartamentos_2.jpg" alt="apartamentos" />
                </Thumb>
                <Description>
                    <h2>Apartamento/Alugar</h2>
                    <p>Compre e alugue imóveis com a maior imobiliária do Brasil Encontre o
                     seu lugar Comprar Alugar Comprar na Planta Comprar Pronto Valor Área do imóvel Dormitórios
                     …</p>
                </Description>
            </Left>

            <Right>
                <Profile/>
            </Right>
        </Container>
       </>
    )
}

const Container=styled.div`
 padding: 20px 150px;
 display: flex;
 justify-content: space-between;
`
const Left=styled.div`
width: 70%;
padding: 10px ;
border: 1px solid rgb(0,0,0,.1);
 
`
const Right=styled.div`
    width: 28%;
    padding: 10px;
    border: 1px solid rgb(0,0,0,.1);
    border-radius: 5px;
 
`
const Thumb=styled.div`
width: 100%;
img{
    width: 100%;
    height: auto;
    border-radius: 5px;
}

`
const Description=styled.div`
padding: 30px 0;
h2,p{
    margin-bottom: 15px;
}

`
