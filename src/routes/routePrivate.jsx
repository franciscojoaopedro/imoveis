import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export   function PrivateRoute({children}){

    const  isAuth=localStorage.getItem("Yt")
    const [userExist,setUserExist]=useState()
    useEffect(()=>{
       if(isAuth){
        alert("logado")
           setUserExist(true)
        }
        else{
            setUserExist(false)
        }
   },[])
    return  isAuth ? children:<Navigate to="/login"/>
}