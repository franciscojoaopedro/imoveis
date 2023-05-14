import RouterApp from "../../routes";

import {styled} from 'styled-components';

export default function Landing(){
    return(
        <Container>
            <RouterApp/>
        </Container>
    )
}


const Container=styled.div`
position: relative;
width: 100%;
`
