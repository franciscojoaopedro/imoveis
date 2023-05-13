import { styled } from "styled-components"

export default function Button({props,children}){
    return(
    <Container {...props}>
    {children}
    </Container>
    )
}

const Container=styled.button`
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
`