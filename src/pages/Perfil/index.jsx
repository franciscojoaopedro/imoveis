import { styled } from "styled-components";
import CadastroImoveis from "../CadastraImoveis";
import { useEffect, useState } from "react";


export default function Perfil(){

    const  isAuth=localStorage.getItem("Yt")
    const [userExist,setUserExist]=useState(false)
   useEffect(()=>{
       if(isAuth=="string"){
           setUserExist(true)
        }
   },[])
    return (
        userExist?
       <Container>
                <Left>
                    <h1>Lado esquerdo</h1>
                </Left>
                <Reght>
                    <CadastroImoveis/>
                </Reght>
        </Container>:(window.location.href="/sem-perfil")
        )
}
const Container=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Left=styled.div`

`

const Reght=styled.div`

`