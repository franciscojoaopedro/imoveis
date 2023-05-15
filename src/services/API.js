import axios from "axios";
export const urlApi='api-imoveis-despachou.up.railway.app' || "https://api-imoveis-despachou.up.railway.app/";
const Api=axios.create({
    baseURL:"api-imoveis-despachou.up.railway.app" || "https://api-imoveis-despachou.up.railway.app",
    headers:{
        "Content-Type":"application/json"
    }
})
export default Api;