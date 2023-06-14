import {MdTerrain} from "react-icons/md"
import {BsFillBuildingFill, BsFillBuildingsFill} from "react-icons/bs"
import {FaBuilding}from "react-icons/fa"
import {GiHouse} from "react-icons/gi"
import { styled } from "styled-components"

export default function Categoria(){
    return(
        <Container>
        <Text>
            <h3>Categoria</h3>    
            <div>
                <ul>
                    <li   value="Vivendas"  onClick={()=>setTextInput("Vivendas")} > <GiHouse/> Vivendas</li>
                   <li  value="Apartamentos"  onClick={()=>setTextInput("Apartamento")}  ><FaBuilding/> Apartamentos</li>
                   <li value="Terreno"onClick={()=>setTextInput("Terreno")} > <MdTerrain/> Terreno</li>
                   <li value="Condominio" onClick={()=>setTextInput("Condominio")} >Condominio</li>
                   <li value="Loja" onClick={()=>setTextInput("Loja")}>Lojas</li>
                   <li   value="Imoveis" onClick={()=>setTextInput("")}>Outros imoveis</li>
                </ul>
            </div>
        </Text>
       </Container>
    )
}
const Text=styled.div`
padding: 10px;
display: flex;
justify-content:flex-start ;
align-items: flex-start;
flex-direction: column;

h3{
    color: #fff;
    font-weight: 700;
}
div{
    ul{
        li{
            font-size: 20px;
            color: #cececc;
            font-weight: 700;
            margin-bottom: 5px;
            cursor: pointer;
               
        }

        li:hover{
           
                    padding: 5px 20px ;
                    color: #cececc;
                    border-bottom:  3px solid #fff;
             
            
        }
    }
}
`
const Container=styled.div`
left: 0;
width: 30%;
position: sticky;
background: var(--blue);
display: block;
justify-content: flex-start;
align-items: flex-start;
height: 100vh;
flex-direction: column;

`