import { createContext, useEffect, useState } from "react";
import Api from "../services/API";
import { toast } from "react-toastify";
import { GetLocalStorage, SetLocaStorage } from "./utils";

export const AppContext=createContext({});

export const AppContextProvider=({children})=>{
    const[user,setUser]=useState();

    useEffect(()=>{
        const user=GetLocalStorage();
        if(user){
            setUser(user)
            console.log("Usuario logado",user);
        }
    },[]);
    async function authenticate(email,password){

        // aqui é para fazer autenticacão do usuario cadastrado
        Api.post("/session",{email,password})
        .then((response)=>{
            if(!response.data.error===true){
                toast.success(response.data.message);
            }else{
                toast.error(response.data.message);
            }
            console.log(response.data.user)
            const id=response.data.user.id;
            const email=response.data.user.email;
            const payload={token:response.data.token,email,id}
            setUser(payload)
            SetLocaStorage(payload);
            window.location.href="/perfil";
        })
        .catch((error)=>console.log({message:"App Error",error:true}))
    }

    // Funcao para sair, para terminar a sessão
    function logout(){
        setUser(null);
        SetLocaStorage(null);
    }
    return(
        <AppContext.Provider value={{...user,authenticate,logout}}>
            {children}
        </AppContext.Provider>
    )
}