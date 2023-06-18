import { styled } from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import { AppAuth } from "../../Context/AppAuth";
import { toast } from "react-toastify";

import imageLeft from "../../assets/house-amico.svg"
import { Link } from "react-router-dom";


export default function Login(){
    const auth=AppAuth();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    
    const handleLogin= async (event)=>{
        event.preventDefault()
        await auth.authenticate(email,password);
        toast.success("seja bem vindo")
    }

    return(
       <ContainerFlex>
       <ImagemLeft>
            <img src={imageLeft} />
       </ImagemLeft>
       <Container>
            <h2>Login</h2>
            <p>Entra com o seu emial e senha</p>
            <ContainerForm  onSubmit={handleLogin} >
                <Form>
                <Label>Username</Label>
                <Input
                type="email"
                required
                name="email"
                value={email}
                placeholder="email@exemplo.com"
                onChange={(e)=>setEmail(e.target.value)}
                />
                 <Label>Password</Label>
                <Input
                 type="password"
                 value={password}
                 name="password"
                 required
                 onChange={(e)=>setPassword(e.target.value)}
                 placeholder="***********"
                />
                <Link to={"/perfil"}>
                <Button type="submit" >Entrar</Button>
                </Link>
            <h4>
                Não tenho uma conta?<Link to={"/cadastro"} >
                Inscreva-se
                </Link>
            </h4>
                </Form>
            </ContainerForm>
        </Container>
       </ContainerFlex>
    )
}

const ContainerFlex=styled.div`
position: relative;
width: 100%;
display: flex;
background: #22d3ee;
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
const Container=styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: #407BFF;
h2{
    font-size: 1.75rem;
    color: #fff;
    line-height: 1.4em;
}
p{
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 15px;
}

`
const ContainerForm=styled.div`
padding: 35px;
width: 370px;
background: transparent;
color: #fff;

`
const Form=styled.form`
width: 100%;

`
 const Label=styled.label`
    display: flex;
    margin-bottom: 10px;
    font-weight: 500;
 `