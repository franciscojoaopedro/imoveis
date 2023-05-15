import { styled } from "styled-components";
import CadastroImoveis from "../CadastraImoveis";


export default function Perfil(){
    const  isAuth=()=>localStorage.getItem("Yt")

    return(
        <Container>
            <Left>
                <h1>Lado esquerdo</h1>
            </Left>
            <Reght>
                <CadastroImoveis/>
            </Reght>
        </Container>
    )
}
const Container=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Left=styled.div`

`

const Reght=styled.div`

`