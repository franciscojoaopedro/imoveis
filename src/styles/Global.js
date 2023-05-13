import {createGlobalStyle} from "styled-components";


export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
     --primary:#f7f9fc;
     --secondary:#15181c;
     --gray:#d9d9d9;
     --blue:#4766ff;
     --white:#fff;
}


body{
    background-color: var(--primary);
    color: var(--secondary);
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Roboto Mono', monospace;
}

ul,nav{list-style: none;}
a{text-decoration:none;

cursor: pointer;
}
`