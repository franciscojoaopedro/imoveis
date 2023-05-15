import axios from "axios";
export const urlApi='http://localhost:8000' || "https://api-imoveis-despachou.up.railway.app/";
const Api=axios.create({
    baseURL:"http://localhost:8000" || "https://api-imoveis-despachou.up.railway.app",
    headers:{
        "Content-Type":"application/json"
    }
})
export default Api;