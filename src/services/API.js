import axios from "axios";

const url='https://srv-imoveis.onrender.com' || "http://localhost:8000";

export const urlApi=url;
const Api=axios.create({
    baseURL:url,
    headers:{
        "Content-Type":"application/json"
    }
})
export default Api;