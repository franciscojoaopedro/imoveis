import { styled } from "styled-components";
import CadastroImoveis from "../CadastraImoveis";
import { useEffect, useState } from "react";
import imagemLeft from "../../assets/imoveis.svg"

export default function Perfil(){


    return (
     
       <Container>
                
                <ImagemLeft>
            <img
            src={imagemLeft}
            />
        </ImagemLeft>
               
                <Reght>
                    <CadastroImoveis/>
                </Reght>
        </Container>
        )
}
const Container=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const Reght=styled.div`

`
const ImagemLeft=styled.div`
width: 50%;
background: #fff;
display: flex;
justify-content: center;
align-items: center;


img{
    width:100%;
    height: auto;
}

`