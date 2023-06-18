import { styled } from "styled-components";
import TopBanner from "../../components/TopBanner";
import Profile from "../../components/Profile";
import { useEffect, useState } from "react";
import Api, { APIURL_IMAGES } from "../../services/API";
import { useParams } from "react-router-dom";



export default function Imobi(){
    
    const {id}=useParams()
    const[dataimobi,setDataImobi]=useState([]);
    const [idUser,setIdUser]=useState();
    const [contacto,setContacto]=useState();
    const [nome,setNome]=useState();
    const [email,setEmail]=useState();


    useEffect(   ()=>{
        buscarImoveisPorId()
        pegarIdUser()
    }
    ,[])

    async function buscarImoveisPorId ()   {
      await  Api.get(`/imobi/${id}`)
        .then( async (response)=>{
            console.log("casa_do:", response.data.imovel.userID)
           setDataImobi(  await response.data.imovel)
            setIdUser( await response.data.imovel.userID)
        })
        .catch((error)=>console.log(error))
    }
  async function pegarIdUser  () {
        await Api.get(`/user/${Number(idUser)}`)
        .then(async (response)=>{
            console.log(response.data)
            setContacto( await response.data.contacto);
            setEmail(await response.data.email);
            setNome(await response.data.nome)
        })
        .catch((error)=>console.error(error))
    }
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
            thumb={`${APIURL_IMAGES}/uploads/${thumb}`}
            tipo={tipo}
            descricao={descricao}
        />
        <Container>
            <Left>
                <Thumb>
                    <img src= {`${APIURL_IMAGES}/uploads/${thumb}`} alt="apartamentos" />
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
                <Profile
                nome={nome}
                contacto={contacto}
                email={email}
               key={nome}
                />
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
    width: 40%;
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
