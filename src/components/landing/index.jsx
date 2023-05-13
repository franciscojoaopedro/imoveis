import PageLogin from "../../pages/EntrarCliente"
import Home from "../../pages/Home";
import Imobi from "../../pages/Imobi";
import Cabecalho from "../cabecalho/Cabecalho"
import Destaques from "../destaques"
import Rodape from "../rodape"

import {styled} from 'styled-components';

export default function Landing(){
    return(
        <PAGINA>
            <Cabecalho/>
           {/*
           
       <Destaques/>
            <Home/>  
    */}
    <Imobi/>
            <Rodape/>
        </PAGINA>
    )
}


const PAGINA=styled.div`
position: relative;
width: 100%;
`
