import { Link } from "react-router-dom";
import {styled} from "styled-components";
import {register} from "swiper/element/bundle"


register()
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";


import {Swiper,SwiperSlide} from "swiper/react"

export default function Destaques({texto,}){
    
    const data=[
        {id:'1',imagem:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqueroficarrico.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F06%2Fcomo_investir_em_imoveis.jpg&f=1&nofb=1&ipt=f04d11d01469ca6e7c9e23891cbbb9ee3358fdc42cb843f5f3fc4ffc48a507f2&ipo=images"},
        {id:'2',imagem:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fkkn5CLsTUo0%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=5f4ae94c750752138de5219658e49ea0096195dda75a2f2752f829f1f0892b4c&ipo=images"},
        {id:'3',imagem:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fkkn5CLsTUo0%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=5f4ae94c750752138de5219658e49ea0096195dda75a2f2752f829f1f0892b4c&ipo=images"},
        {id:'4',imagem:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgarvey-park-hotel.brasiliatophotels.com%2Fdata%2FPhotos%2F767x460%2F10187%2F1018741%2F1018741477.JPEG&f=1&nofb=1&ipt=502fccced87e242971fbe66929477ed4af45b6e10b221968992751405b49f08e&ipo=images"},
        {id:'5',imagem:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.viladaserrabh.com.br%2Fwp-content%2Fuploads%2F2020%2F05%2Fprisma-empreendimento-comercial-no-vale-do-sereno-salas-e-lojas-6-1024x601.jpg&f=1&nofb=1&ipt=dcbd9830ad769088a116857c10c7c94d1b34fa978f1f841995367e82f525b2ac&ipo=images"}
    ]
   
    return(
        <Container className="Destaques">

            <Swiper
            slidesPerView={1}
            pagination={{clickable:true}}
            navigation
            autoplay
            >
                    {data.map((item)=>(
                        <SwiperSlide key={item.id}>
                            <img
                            src={item.imagem}
                            alt="imoveis"
                            
                            />
                        </SwiperSlide>
                    ))}
                

            </Swiper>

                <Text>
                    <h2>Encontras  os melhores imoveis aqui!</h2>
                    <p>Compra e vende  imóveis com a maior imobiliária de Luanda Encontre o
                     seu lugar Comprar Alugar Comprar na Planta Comprar Pronto Valor Área do imóvel Dormitórios
                     …</p>
                    <Link to="/imoveis">
                    <span>Encontra os Imoveis</span>
                    </Link>
                </Text>
        </Container>
    )
}

export const slide_img=styled.img`
width: 100%;
height: auto;
object-fit: cover;
`
const Container=styled.div`
    position: relative;
    background-size: cover;
    background-position: center;
    background-color: rgba(0,0,0,0.6);
    :before{
        opacity: 0.1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    img{
        width: 100%;
height: 600px;
object-fit: cover;
    }
`
const Text=styled.div`
background: #0f172a;
opacity: 0.7;
padding: 10px 50px;
top: 0;
left: 0;
width: 50%;
position: absolute;
z-index: 2;
height: 450px;
h2{
    color: var(--white);
    font-size: 62px;
    font-weight: 700;
    margin-bottom: 35px;
}

p{
    color: var(--white);
    margin-bottom: 25px;
}
span{
    background-color: var(--blue);
    border: 0;
    padding: 12px 120px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 8px;
    color: #fff;
    line-height: 24px;
    cursor: pointer;
}
`



/*
const SECTION=styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: azure;
    width: 100%;
    min-height: 100vh;
`

const TEXTO=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
*/