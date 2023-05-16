import axios from "axios";

export const urlApi='http://localhost:8000' || "http://localhost:8000";
const Api=axios.create({
    baseURL:"https://api-imoveis-despachou.up.railway.app" || "http://localhost:8000",
    headers:{
        "Content-Type":"application/json"
    }
})
export default Api;