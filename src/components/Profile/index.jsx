import { styled } from "styled-components"
import {MdEmail} from "react-icons/md"
import {FaWhatsapp} from "react-icons/fa"
import Input from "../Input"
import TextArea from "../TextArea"
import Button from "../Button"


export default function Profile(){
    return(
       <>
        <Perfil>
            <ProfileImg>
                <img src="https://images.unsplash.com/photo-1628149329516-4b85b2225c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="avatar_perfil" />
            </ProfileImg>
                <ProfileDescription>
                        <h2>Francisco Pedro</h2>
                        <p>Sobre o Corrector</p>
                </ProfileDescription>
        </Perfil>

        <ProfileContacto>
        <h2>Informações para contacto</h2>
        <p>Corrector Junior</p>
        <p> <FaWhatsapp size={20} /> 937489012 </p>
        <p><MdEmail size={20} />francisco@gmail.com</p>
        </ProfileContacto>
        
        <ProfileFormContact>
            <h3>Contate o anunciante</h3>
            <form 
            action="https://formsubmit.co/franciscojoaopedro1998@gmail.com"
            method="POST"
            >
                <Input
                name="_next"
                type="hidden"
                value="http://localhost:5173"
                />
                <Input
                name="_autoresponse"
                type="hidden"
                value="Recebemos sua menssagem, obrigada pelo interesse 
                no nossos imoveis,logo responderemos!
                OBRIGADO..
                "
                />
                 <Input
                name="_captcha"
                type="hidden"
                value="false"
                />
                <Input
                name="nome"
                type="text"
                placeholder="Nome" 
                required
                />
                
                <Input 
                name="email"
                type="email" 
                placeholder="E-mail" 
                required />
                <TextArea cols="30" rows="10"  name="mensagem" placeholder="Mensagem:" />
                <Button type="submit" >Enviar mensagem</Button>
            </form>
        </ProfileFormContact>
       </>

    )
}

const Perfil=styled.div`
display: flex;
justify-content: space-between;
`
const ProfileImg=styled.div`
    width: 200px;
    img{
        width: 100%;
        height: auto;
        border-radius:5px;
    }
`
const ProfileDescription=styled.div`
h3,p{
    margin-bottom: 15px;
    color: var(--secondary);
}

`
const ProfileContacto=styled.div`
    h3,p{
    margin-bottom: 15px;
    color: var(--secondary);
}
`
const ProfileFormContact=styled.div`
    h3{
    margin-bottom: 15px;
    color: var(--secondary);
}
form{
    display: flex;
    flex-direction: column;
}
`