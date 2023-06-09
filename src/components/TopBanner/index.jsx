import { styled } from "styled-components"
import {APIURL_IMAGES } from "../../services/API"



export default function TopBanner({thumb,tipo,descricao}){
    const urlImage=`${APIURL_IMAGES}/uploads/${thumb}`;
    return(
<Container key={tipo}>
    <Banner key={tipo+1}>
        <img
        src={thumb}
        />
        <Text>
            <h2>{tipo}</h2>
            <p>{descricao}</p>
        </Text>
    </Banner>
</Container>
    )
}
const Banner=styled.div`
width: 100%;
display: block;
justify-content: center;
align-items: center;


img{
    top: 0;
    width: 100%;
    height:500px;

    opacity:.4;
    &{
    
    :before{
        background-color: rgba(0,0,0,.1);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    }
}

`
const Container=styled.div`
padding: 100px 150px;
width: 100%;
background-size: cover;
background-position: center;
background-color: black;

/*

*/

`
const Text=styled.div`
width: 55%;
position: relative;
z-index: 1;
h2{
    color: #fff;
    font-size: 3.8rem;
    margin-bottom: 25px;
}
p{
    color: #fff;
    margin-bottom: 25px;
}
`