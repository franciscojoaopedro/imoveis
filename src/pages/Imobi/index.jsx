import { styled } from "styled-components";
import TopBanner from "../../components/TopBanner";
import Profile from "../../components/Profile";
import { useEffect, useState } from "react";
import Api, { urlApi } from "../../services/API";
import { useParams } from "react-router-dom";



export default function Imobi(){
    const[dataimobi,setDataImobi]=useState([]);
    const {id}=useParams()
    useEffect(()=>{
        Api.get(`/imobi/${id}`)
        .then((response)=>{
            setDataImobi(response.data.imovel)
        })
        .catch((error)=>console.log(error))
    },[])

    const {
        tipo,
        cidade,
        valor,
        endereco,
        descricao,
        thumb
    } =dataimobi;
    return(
       <>
        <TopBanner
            thumb={thumb}
            tipo={tipo}
            descricao={descricao}
        />
        <Container>
            <Left>
                <Thumb>
                    <img src= {`${urlApi}/uploads/${thumb}`} alt="apartamentos" />
                </Thumb>
                <Description>
                    <h2>{tipo}</h2>
                    <p>Província:{cidade}</p>
                    <p>Endereco:{endereco}</p>
                    <p>Preço:{valor}</p>
                    <p><b>Sobre:</b>{descricao}</p>
                </Description>
            </Left>

            <Right>
                <Profile/>
            </Right>
        </Container>
       </>
    )
}

const Container=styled.div`
 padding: 20px 150px;
 display: flex;
 justify-content: space-between;
 gap: 10px;
`
const Left=styled.div`
width: 70%;
padding: 10px ;
border: 1px solid rgb(0,0,0,.1);
 
`
const Right=styled.div`
    width: 30%;
    padding: 10px;
    border: 1px solid rgb(0,0,0,.1);
    border-radius: 5px;
 
`
const Thumb=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
img{
    width: 100%;
    height: 500px;
    border-radius: 5px;
}

`
const Description=styled.div`
padding: 30px 0;
h2,p{
    margin-bottom: 15px;
}

`
