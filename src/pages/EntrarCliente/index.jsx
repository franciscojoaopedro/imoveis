import { styled } from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import { AppAuth } from "../../Context/AppAuth";
import { toast } from "react-toastify";

export default function Login(){
    const auth=AppAuth();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    
    const handleLogin= async (event)=>{
        event.preventDefault()
        await auth.authenticate(email,password);
    }


    return(
       <>
        <Container>
            <h2>Acesse a sua conta</h2>
            <p>Entra com o seu emial e senha</p>
            <ContainerForm  onSubmit={handleLogin} >
                <Form>
                <Label>E-mail</Label>
                <Input
                type="email"
                required
                name="email"
                value={email}
                placeholder="email@exemplo.com"
                onChange={(e)=>setEmail(e.target.value)}
                />
                 <Label>Senha</Label>
                <Input
                 type="password"
                 value={password}
                 name="password"
                 required
                 onChange={(e)=>setPassword(e.target.value)}
                 placeholder="***********"
                />
            <Button type="submit" >Entrar</Button>
                </Form>
            </ContainerForm>
        </Container>
       </>
    )
}

const Container=styled.div`
padding: 100px 150px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h2{
    font-size: 1.75rem;
}
p{
    font-size: 1.2rem;
    margin-bottom: 15px;
}

`
const ContainerForm=styled.div`
padding: 35px;
width: 370px;
background-color: #e2e8f0;
`
const Form=styled.form`
width: 100%;

`
 const Label=styled.label`
    display: flex;
    margin-bottom: 10px;
    font-weight: 500;
 `