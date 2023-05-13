import { styled } from "styled-components"



export default function TopBanner(){
    return(

<Container>
        <Text>
            <h2>Apartamentos</h2>
            <p>Melhores apartamentos de Luanda, encontra aqui mais que suas espectativas..</p>
        </Text>
</Container>
    )
}
const Container=styled.div`
padding: 50px 150px;
position: relative;
background-size: cover;
background-position: center;
background-image: url("apartamegntos_1.jp");

`
const Text=styled.div`

`