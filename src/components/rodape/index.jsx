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
            <p>Receba mais contatos divulgando os seus imóveis no maior portal imobiliário de Angola!</p>
            <nav>
                <li><span> <FaFacebook color="#38bdf8" size={32} /></span></li>
                <li><span> <FaWhatsapp color="#86efac" size={32} /></span></li>
                <li><span> <FaInstagram color="#c084fc"  size={32} /></span></li>
            </nav>
            </Item>
         {
            /*
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
            */
         }
        </Container>

        <Copy>
            <p>Copyrigth 2023 - Despachou , todos os direitos reservados - <a href={`https://github.com/franciscojoaopedro`} target="_blank" ><b><u>Ngunga Dev</u></b></a>
            </p>
        </Copy>
  </>
    )
}

const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 50px 150px;
background-color:#155e75;

p{
    margin-top: 20px;
    color: #fff;
    text-align: justify;
    line-height: 1.4em;
    font-weight: 200;
}

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
        justify-content: center;
        align-items: center;
        margin-top: 8px;
          li{
           span{
            margin-right: 15px;
           }
          }
     
    }
`
const Copy=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px 150px;
border-top: 1px solid rgba(0,0,0,1.1);

p{
    font-size: 14px;
    color: #475569;
    font-weight: 200;
}



`
