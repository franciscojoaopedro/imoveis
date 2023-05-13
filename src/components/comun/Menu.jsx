import { Link } from "react-router-dom"
import {styled} from "styled-components"

export default function Menu(){
    return(
        <NAV>
            <ul>
                <li>
                    <a href="#">Sobre</a>
                </li>
                <li>
                    <a href="#">Agentes</a>
                </li>
                <li>
                    <Link to="/cadastro">
                   <a href="#">Registar</a>
                    </Link>
                </li>
                <li>
                  <Link to="/login">
                  <a href="#">Entrar</a>
                  </Link>
                </li>
            </ul>
        </NAV>
    )
}
const NAV=styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        li{
            font-size: 1.2rem;
            border: 1px solid var(--gray);
            border-radius: 10px;
            padding: 10px;
            &:hover{
                background-color:var(--gray);
            }
            a{
                color: #fff;
            }
        }

    }


`