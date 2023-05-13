import Logo from "../comun/Logo";
import Menu from "../comun/Menu";
import {styled}  from "styled-components"

export default function Cabecalho(){
    return(
        <Header>
            <Logo/>
            <Menu/>
        </Header>
    )
}
const Header=styled.header`
    background-color: var(--blue);
    padding: 50px 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 2px solid #121212;
`

