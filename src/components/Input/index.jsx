import { styled } from "styled-components";


export default function Input(props){
    return(
        <Container {...props} />
    )
}


const Container=styled.input`
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
`