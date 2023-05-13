import { styled } from "styled-components"


export default function Profile(){
    return(
       <>
        <Perfil>
            <ProfileImg>
                <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="avatar_perfil" />
            </ProfileImg>
                    <ProfileDescription>
                        <h2>Francisco Pedro</h2>
                        <p>Sobre o Corrector</p>
                    </ProfileDescription>
        </Perfil>

        <ProfileContacto>
        <h2>Informações para contacto</h2>
        <p>Corrector Junior</p>
        <p> 937489012 </p>
        <p>francisco@gmail.com</p>
        </ProfileContacto>

        <ProfileFormContact>
            <h3>Contate o anunciante</h3>
            <form>
                <input type="text" placeholder="Nome"  required />
                <input type="email" placeholder="E-mail" required />
                <textarea cols="30" rows="10" placeholder="Mensagem:"></textarea>
                <button>Enviar mensagem</button>
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
    input,textarea{
        width: 100%;
        height: 50px;
        padding: 8px 15px;
        margin-bottom: 10px;
        border-radius: 3px;
        border: 2px solid var(--gray);
        outline: none;
        border-radius: 8px;
        color: var(--secondary);
        font-weight: 500;
        letter-spacing: 0.1px;
        font-size: 0.93rem;
    }

    textarea{
        resize: none;
        width: 100%;
        height: auto;
    }
    button{
        width: 100%;
        display: inline-block;
        text-align: center;
        background-color: var(--blue);
        color: #FFF;
        line-height: 24px;
        border: none;
        font-size: 0.8rem;
        font-weight: 600;
        transition: 0.3s;
        padding: 12px 20px;
    }
}
`