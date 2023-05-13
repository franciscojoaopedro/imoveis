import { styled } from "styled-components"
import {MdError} from "react-icons/md"
export default function Error(){
    return(
        <Container>
            <MdError  size={100} color=" #e11d48" />
        <h2>404</h2>
        <p>Pagina não encontrada!</p>
        </Container>
    )
}

const Container=styled.div`
padding:150px 150px;
display:flex ;
justify-content: center;
align-items: center;
flex-direction: column;
h2{
    font-size: 100px;
    color: #e11d48;
}
p{
    font-size: 1.2rem;
}
`