import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Cabecalho from "../components/cabecalho/Cabecalho";
import Rodape from "../components/rodape";
import Error from "../pages/Error";
import Cadastro from "../pages/RegistarCliente";
import Login from "../pages/EntrarCliente";
import Imobi from "../pages/Imobi";




const RouterApp=()=>{
    return(
        <BrowserRouter>
        <Cabecalho/>
            <Routes>
                <Route path="/" element={<Home/>}  />
                <Route path="/imovel" element={<Imobi/>}  />
                <Route path="/login" element={<Login/>}  />
                <Route path="/cadastro" element={<Cadastro/>}  />
                <Route path="*" element={<Error/>}  />
            </Routes>
        <Rodape/>
        </BrowserRouter>
    )
}

export default RouterApp;