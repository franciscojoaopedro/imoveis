import { styled } from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TopBanner from "../../components/TopBanner";
import { useState } from "react";
import Api from "../../services/API";
import { toast } from "react-toastify";
import imagemLeft from "../../assets/house-amico.svg"
import { Link } from "react-router-dom";

export default function Cadastro(){
    const [data,setData]=useState({
        nome:"",
        email:"",
        password:""
    })

    const InuptValue=(event)=>setData({...data,
        [event.target.name]:event.target.value})
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        Api.post("/createusers",data)
        .then((response)=>{
            console.log(response)
            if(!response.data.error===true){
                toast.success(response.data.message);
            }else{
                toast.error(response.data.message);
            }
        })
        .catch((error)=>{
            console.log({message:error.message});
        })
    }
    return(
       <>
      <TopBanner/>
      <ContainerFlex>
        <ImagemLeft>
            <img
            src={imagemLeft}
            />
        </ImagemLeft>
        <Container>
            <h2>Cria a sua conta</h2>
            <p>Faça parte da nossa plataforma</p>
            <ContainerForm>
                <Form  onSubmit={handleSubmit} >
                <Label>Nome</Label>
                <Input
                type="text"
                required
                placeholder="Nome"
                onChange={InuptValue}
                name="nome"
                />
                <Label>E-mail</Label>
                <Input
                type="email"
                required
                placeholder="email@exemplo.com"
                onChange={InuptValue}
                name="email"

                />
                 <Label>Senha</Label>
                <Input
                 type="password"
                 required
                 placeholder="***********"
                    name="password"
                 onChange={InuptValue}
                />
            <Button type="submit" >Cadastrar</Button>
            
                </Form>
            </ContainerForm>
        </Container>
      </ContainerFlex>
       </>
    )
}


const ContainerFlex=styled.div`
position: relative;
width: 100%;
display: flex;
background: #407BFF;
`
const ImagemLeft=styled.div`
padding: 10px;
width:50%;
background: #fff;
display: flex;
justify-content: center;
align-items: center;


img{
    width:100%;
    height: auto;
}

`

const Container=styled.div`
border-left: 2px solid blue;
width: 70%;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #fff;

h2{
    font-size: 1.75rem;
}
p{
    font-size: 1.2rem;
    margin-bottom: 15px;
}

`
const ContainerForm=styled.div`
padding: 20px;
width: 370px;
background: transparent;
`
const Form=styled.form`
width: 100%;

`
 const Label=styled.label`
    display: flex;
    margin-bottom: 10px;
    font-weight: 500;
 `
