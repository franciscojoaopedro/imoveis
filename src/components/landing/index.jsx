import { AppContextProvider } from "../../Context/AppContext";
import RouterApp from "../../routes";

import {styled} from 'styled-components';

export default function Landing(){
    return(
        <Container>
           <AppContextProvider>
            <RouterApp/>
           </AppContextProvider>
        </Container>
    )
}


const Container=styled.div`
position: relative;
width: 100%;
`
