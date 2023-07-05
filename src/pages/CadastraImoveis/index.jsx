import { styled } from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TopBanner from "../../components/TopBanner";
import { useState } from "react";
import Api from "../../services/API";
import { toast } from "react-toastify";
import TextArea from "../../components/TextArea";
import { GetLocalStorage } from "../../Context/utils";
import imagemLeft from "../../assets/house-amico.svg"


export default function CadastroImoveis(){
    const [thumb,setthumb]=useState()
    const [tipo,setTipo]=useState()
    const [endereco,setEndereco]=useState()
    const [cidade,setCidade]=useState()
    const [uf,setUf]=useState()
    const [valor,setValor]=useState()
    const [descricao,setDescricao]=useState()
    const [slug,setSlug]=useState()

   const user =GetLocalStorage()
   console.log("usuario logado quero id",user.id)

    const imovel={
        id:user.id,
        thumb,
        tipo,
		endereco,
		cidade,
		uf,
		valor,
        descricao,
		slug 

    }
    const onImageChange = (event) => {
       
            setthumb(event.target.files[0]);
        
       }
       

    
    const handleSubmit=  async (event)=>{
        event.preventDefault();
        const headers={
            "headers":{
                "content-type":"multipart/form-data"
            }
        }
        console.log(imovel,headers)

       await Api.post("/createimobi",imovel,headers)
        .then((response)=>{
            console.log(response)
            if(!response.data.error===true){
                toast.success("Cadastrado com sucesso");
            }else{
                toast.error(response.data.message);
            }
        })
        .catch((error)=>{
            console.log({message:error.message});
        })
    
    }
    return(
       
        <Container>
            <h2>Cadastra os seus imoveis</h2>
            <p>Venda aqui os teus imoveis</p>
            <ContainerForm>
                <Form  onSubmit={handleSubmit} >
                <Label>Foto do imovel</Label>
                <Input
                type="file"
                required
                name="thumb"
                onChange={onImageChange}
                />
                <Label>Tipo de imoveil</Label>
                <Input
                 type="text"
                 required
                 name="name"
                 onChange={(event)=>setTipo(event.target.value)}
                />

                <Label>Preço</Label>
                <Input
                 type="text"
                 required
                 name="name"
                 value={valor}
                 onChange={(event)=>setValor(event.target.value)}
                />
               <displayFormFlex>

               <Label>Endereço do imovel</Label>
                <Input
                 type="text"
                 required
                 name="name"
                 value={endereco}
                 onChange={(event)=>setEndereco(event.target.value)}
                />

                <Label>Endereco/Cidade</Label>
                <Input
                 type="text"
                 required
                 name="name"
                 value={cidade}
                 onChange={(event)=>setCidade(event.target.value)}
                />
               <Label>UF</Label>
                <Input
                 type="text"
                 required
                 name="name"
                 value={uf}
                 onChange={(event)=>setUf(event.target.value)}
                />
               </displayFormFlex>

                <Label>Titulos do imoveil</Label>
                <Input
                 type="text"
                 required
                 name="name"
                 value={slug}
                 onChange={(event)=>setSlug(event.target.value)}
                />
                 
                <Label>Descrição sobre o</Label>
                <TextArea
                type="text"
                value={descricao}
                onChange={(event)=>setDescricao(event.target.value)}
                />


            <Button type="submit" >Registrar</Button>
                </Form>
            </ContainerForm>
        </Container>
  
    )
}

const displayFormFlex=styled.div`
display: flex;
flex-direction: row;

`

/*
const Container=styled.div`
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
*/
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
width: 100%;
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