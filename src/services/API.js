import axios from "axios";

const url='https://api-imoveis-despachou.up.railway.app' || "http://localhost:8000";

export const urlApi=url;
const Api=axios.create({
    baseURL:url,
    headers:{
        "Content-Type":"application/json"
    }
})
export default Api;