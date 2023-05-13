import {styled} from "styled-components"
import Logo from "../comun/Logo";
import {FaFacebook,FaWhatsapp,FaInstagram}  from "react-icons/fa"
import {MdEmail} from "react-icons/md";
export default function Rodape(){
    return(
  <>
        <Container>
            <Item>
            <Logo/>
            <p>Receba mais contatos divulgando os seus imóveis no maior portal imobiliário de Luanda</p>
            <nav>
                <li><span> <FaFacebook size={32} /></span></li>
                <li><span> <FaWhatsapp  size={32} /></span></li>
                <li><span> <FaInstagram  size={32} /></span></li>
            </nav>
            </Item>
            <Item>
           <h3>Serviços</h3>
            <ul>
                <li><span>Comprar</span></li>
                <li><span>Vender</span></li>
                <li><span>Arrendar</span></li>
            </ul>
            </Item>

            <Item>
           <h3>Serviços</h3>
            <ul>
                <li><span>Comprar</span></li>
                <li><span>Vender</span></li>
                <li><span>Arrendar</span></li>
            </ul>
            </Item>

            <Item>
           <h3>Contactos</h3>
            <ul>
                <li><span><FaWhatsapp  size={32} />+244 937489012</span></li>
                <li><span><MdEmail size={32}/> ngungadev@gmail.com</span></li>
                <li><span><MdEmail size={32}/> despachou@comercial.com</span></li>
            </ul>
            </Item>
        </Container>

        <Copy>
            <p>Copyrigth 2023 - Despachou , todos os direitos reservados</p>
            <ul>
                <li> <span>Termos de Uso</span> </li>
                <li> <span>Política de Privacidade</span> </li>
                <li> <span>Política de Cookeis</span> </li>
            </ul>
        </Copy>
  </>
    )
}

const Container=styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
padding: 50px 150px;
background-color:#d1d5db;

`
const Item=styled.div`
    h3{
        margin-bottom: 10px;
    }
    ul{
        li{
            padding:12px 0;
            display: flex;
            align-items: center;
            span{
                display: flex;
                justify-content: flex-start;
            }
        }
    }
    nav{
        display: flex;
        margin-top: 15px;
     
          li{
           span{
            margin-right: 15px;
           }
          }
     
    }
`
const Copy=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 150px;
border-top: 1px solid rgba(0,0,0,1.1);

p{
    font-weight: 600;
        color: #475569;
}
ul{
    display: flex;
    align-items: center;
    justify-content: center;
    li{
       span{
        font-weight: 600;
        color: #475569;
        margin-left: 5px;
       }
    }
}

`
