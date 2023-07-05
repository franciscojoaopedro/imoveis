import axios from "axios";

const url='https://imoveis-api.up.railway.app';
export const APIURL_IMAGES="https://imoveis-api.up.railway.app"
const Api=axios.create({
    baseURL:url,
    headers:{
        "Content-Type":"application/json"
    }
})

export default Api;