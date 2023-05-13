import { styled } from "styled-components";
import Cabecalho from "../../components/cabecalho/Cabecalho";
export default function PageLogin(){
    return(
       <>
        <Cabecalho/>
        <SECTION>
            <DICAS>

                <h2>
                    Seja Bem Vindo
                </h2>
                <h3>
                    Entrar para comecar um negocio no sector imobiliario!
                </h3>
                <h3>
                    Aqui voce encontras casas dos teus gostos!
                </h3>
                <h4> Registar </h4>
            </DICAS>
            <FORM>
               <INPUTS>
                <label >Email</label>
                <INPUT type="email" required  placeholder="email@examplo.com"/>
               </INPUTS>
               <INPUTS>
                <label >Senha</label>
                <INPUT type="password"  required/>
               </INPUTS>
               <INPUTS>
                <BUTTON type="submit">Entrar</BUTTON>
               </INPUTS>
            </FORM>
        </SECTION>
       </>
    )
}

const SECTION=styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cecece;
   // background: url("../../../public/az.jpeg");
    width: 100%;
    min-height: 100svh;
`
const FORM=styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    border-radius: 8px;
    width: 400px;
    height: 300px;
    background: #fffc;
`
const INPUTS=styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
color: #fff;
font-weight: 700;
margin: 5px 0;
`
const INPUT=styled.input`
    border: none;
    outline: 0;
    border-radius: 8px;
    width: 100%;
    padding: 10px 2px;
    line-height: 150%;

`

const BUTTON=styled.button`
padding: 5px 32px;
background-color: ;
color: #fff;
border: none;
border-radius: 8px;
font-size: 18px;
font-weight: 500;
background-color: lightskyblue;
cursor: pointer;
`

const LABEL=styled.label`

`

const DICAS=styled.div`
 width: 400px;
    height: 300px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
flex-direction: column;
`