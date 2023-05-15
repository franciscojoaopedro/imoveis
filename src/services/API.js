import axios from "axios";
export const urlApi='https://api-imoveis-despachou.up.railway.app' || "https://api-imoveis-despachou.up.railway.app/";
const Api=axios.create({
    baseURL:"https://api-imoveis-despachou.up.railway.app" || "https://api-imoveis-despachou.up.railway.app",
    headers:{
        "Content-Type":"application/json"
    }
})
export default Api;