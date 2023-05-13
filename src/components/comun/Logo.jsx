import {styled} from "styled-components"
export default function Logo(){
    return(
        <Logotipo>
            <PrimeiroTexto>Despa</PrimeiroTexto>
            <SegundoTexto>Chou</SegundoTexto>
        </Logotipo>
    )
}

const Logotipo=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    border-radius: 8px;
    font-size: x-large;
   
`
const PrimeiroTexto=styled.span`
    color: #fff;
    font-weight: 900;
`
const SegundoTexto=styled.span`
    color: #fff;
    font-weight: 400;
`