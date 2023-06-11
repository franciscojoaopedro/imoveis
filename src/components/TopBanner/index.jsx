import { styled } from "styled-components"
import {APIURL_IMAGES } from "../../services/API"



export default function TopBanner({thumb,tipo,descricao}){
    const urlImage=`${APIURL_IMAGES}/uploads/${thumb}`;
    return(
<Container>
        <Text>
            <h2>{tipo}</h2>
            <p>{descricao}</p>
        </Text>
</Container>
    )
}
const Container=styled.div`
padding: 50px 150px;
position: relative;
background-size: cover;
background-position: center;
background-image: url('apartamentos_1.jpg');

&{

    :before{
       // background-color: rgba(0,0,0,.1);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
}

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