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
import { PrivateRoute } from "./routePrivate";



const  isAuth=()=>localStorage.getItem("Yt")
const RouterApp=()=>{
    return(
        <BrowserRouter>
        <Cabecalho key={123} />
            <Routes>
                <Route path="/"   element={<Home/>}/>
                <Route path="/imovel/:id" element={<Imobi/>}/>
                <Route path="/login" element={<Login/>}  />
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/imoveis" element={<PaginaDeImoveis/>}  />
                <Route path="/perfil"   element={
                    <PrivateRoute>
                        <Perfil/>
                    </PrivateRoute>
                } 
                    
                    />
                <Route path="*" element={<Error/>}  />
            </Routes>
        <Rodape/>
        </BrowserRouter>
    )
}

export default RouterApp;