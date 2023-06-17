import { Link } from "react-router-dom"
import {styled} from "styled-components"

export default function Menu(){
    return(
        <NAV>
            <ul>
                <li>
                    <a href="#">Corretores</a>
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
           // border: 1px solid var(--gray);
            padding:  0 10px;
            &:hover{
                
                border-bottom: 3px solid #fff;
            }
            a{
                color: #fff;
                font-weight: 300;
                font-size: 18px;
            }
        }

    }


`