import axios from "axios";

const url='https://api-imoveis-despachou.up.railway.app' || "http://localhost:8000";

export const urlApi='http://localhost:8000' || "http://localhost:8000";
const Api=axios.create({
    baseURL:"http://localhost:8000" || "http://localhost:8000",
    headers:{
        "Content-Type":"application/json"
    }
})
export default Api;