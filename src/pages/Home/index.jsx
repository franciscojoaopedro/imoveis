import {styled} from "styled-components"
import Card from "../../components/Card"
import {FcSearch} from "react-icons/fc"
import Destaques from "../../components/destaques";
import Cabecalho from "../../components/cabecalho/Cabecalho";
export default function Home(){
    const Cards=[]
    for(let i=0;i<4;i++){
        Cards.push(<Card key={i}></Card>);
    }

    return(
        <>
            <Destaques/>
            <Header>
                <h2><FcSearch/> Encontra a casa dos teus sonhos. </h2>
            </Header>
            <Wrapper>
                {Cards}
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
