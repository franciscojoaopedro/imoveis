import {Routes,BrowserRouter,Route} from "react-router-dom"
import Home from "../pages/Home";
import Cabecalho from "../components/cabecalho/Cabecalho";
import Rodape from "../components/rodape";
import Error from "../pages/Error";
import Cadastro from "../pages/RegistarCliente";
import Login from "../pages/EntrarCliente";
import Imobi from "../pages/Imobi";
import Perfil from "../pages/Perfil";
import PaginaDeImoveis from "../pages/Imoveis";

//  "@types/react-router-dom": "^6.11.1",


const  isAuth=()=>localStorage.getItem("Yt")

const RouterApp=()=>{
    return(
        <BrowserRouter>
        <Cabecalho/>
            <Routes>
                <Route path="/"   element={<Home/>}/>
                <Route path="/imovel/:id" element={<Imobi/>}/>
                <Route path="/login" element={<Login/>}  />
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/imoveis" element={<PaginaDeImoveis/>}  />
                <Route path="/perfil"   element={<Perfil/>} />
                <Route path="*" element={<Error/>}  />
            </Routes>
        <Rodape/>
        </BrowserRouter>
    )
}

export default RouterApp;