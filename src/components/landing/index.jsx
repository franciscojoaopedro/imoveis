import Login from "../../pages/EntrarCliente"
import Error from "../../pages/Error";
import Home from "../../pages/Home";
import Imobi from "../../pages/Imobi";
import Cadastro from "../../pages/RegistarCliente";
import RouterApp from "../../routes";
import Cabecalho from "../cabecalho/Cabecalho"
import Destaques from "../destaques"
import Rodape from "../rodape"

import {styled} from 'styled-components';

export default function Landing(){
    return(
        <Container>
            <RouterApp/>
           {/*
            <Cabecalho/>
            <Error/>
            <Cadastro/>
            <Login/>
           
            <Destaques/>
            <Home/>  
            <Imobi/>
    */}
            <Rodape/>
        </Container>
    )
}


const Container=styled.div`
position: relative;
width: 100%;
`
