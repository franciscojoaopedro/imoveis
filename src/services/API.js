import axios from "axios";

const url='https://srv-imoveis.onrender.com';
export const APIURL_IMAGES="https://srv-imoveis.onrender.com"
const Api=axios.create({
    baseURL:url,
    headers:{
        "Content-Type":"application/json"
    }
})

export default Api;