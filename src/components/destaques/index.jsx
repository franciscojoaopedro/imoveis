import {styled} from "styled-components";

export default function Destaques(){
   
    return(
        <Container className="Destaques">
                <Text>
                    <h2>Encontras melhores casas aqui!</h2>
                    <p>Compre e alugue imóveis com a maior imobiliária de Luanda Encontre o
                     seu lugar Comprar Alugar Comprar na Planta Comprar Pronto Valor Área do imóvel Dormitórios
                     …</p>
                     <span>Encontra os Imoveis</span>
                </Text>
        </Container>
    )
}


/*
const MudarDestaques= async ()=>{
    const imageUrl="public/casa_unsplash_1.jpg"
   const destaque= document.querySelector(".Destaques");
   destaque.style.backgroundImage.url=imageUrl;
}
*/

const Container=styled.div`
    padding: 200px 150px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-color: rgba(0,0,0,0.6);
    background-image: url('casa_unsplash_2.jpg');
    :before{
        opacity: 0.1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
`
const Text=styled.div`
width: 55%;
position: relative;
z-index: 2;
h2{
    color: var(--white);
    font-size: 62px;
    font-weight: 700;
    margin-bottom: 35px;
}

p{
    color: var(--white);
    margin-bottom: 25px;
}
span{
    background-color: var(--blue);
    border: 0;
    padding: 12px 120px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 8px;
    color: #fff;
    line-height: 24px;
    cursor: pointer;
}
`



/*
const SECTION=styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: azure;
    width: 100%;
    min-height: 100vh;
`

const TEXTO=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
*/