import { styled } from "styled-components";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Input from "../../components/Input";
import Button from "../../components/Button";
export default function Cadastro(){
    return(
       <>
        <Cabecalho/>
        <Container>
            <h2>Cria a sua conta</h2>
            <p>Cadastra-se para fazer parte da nossa plataforma</p>
            <ContainerForm>
                <Form>
                <Label>Nome</Label>
                <Input
                type="text"
                required
                placeholder="Nome"
                />
                <Label>Sobrenome</Label>
                <Input
                type="text"
                required
                placeholder="Sobrenome"
                />
                <Label>E-mail</Label>
                <Input
                type="email"
                required
                placeholder="email@exemplo.com"
                />
                 <Label>Senha</Label>
                <Input
                 type="password"
                 required
                 placeholder="***********"
                />
            <Button>Cadastrar</Button>
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
