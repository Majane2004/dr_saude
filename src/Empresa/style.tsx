import styled from "styled-components";
import banner from "/src/assets/banner01.png";
import breakPoints from "../breakPoints";
import img_missa from "/src/assets/empre-missao.png"
import img_valores from "/src/assets/empre-valores.png"
import img_visao from "/src/assets/empre-visao.png"



export const PrincipalDiv = styled.div`
 display: flex;
 width: 100%;
 height: 100%;
 flex-direction: column;
 justify-content:space-around;
align-items:center;


`
export const ContainerMain = styled.div`
 width: 100%;
 height:  100%;
 display:flex;
 justify-content:center;
 flex-direction: column;
align-items:center;

`

export const BannerDiv = styled.div`
  height: 690px;
  width: 100%;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display:flex;
  align-items:center;

  @media ${breakPoints.lg}{
  height: 500px;

}

@media ${breakPoints.md}{
  height: 390px;

}

@media ${breakPoints.sm}{
  height: 340px;
  width: 100%;

}
`

export const BannerdivTexto = styled.div`
width: 50%;
height: 400px;
display:flex;
margin-left:100px;

@media ${breakPoints.lg}{
 width: 70%;
 margin-left:30px;

}

@media ${breakPoints.md}{
 width: 70%;
 margin-left:30px;


}


@media ${breakPoints.sm}{
 width: 70%;
 margin-left:20px;


}


`
export const Textoh1Banner = styled.h1`
 text-align: start; 
 font-size: 70px;
 font-weight: 600;
 margin-top:30px;

 @media ${breakPoints.md} {
 font-size: 50px;
 font-weight: 600;
 margin-top:95px;
}

@media ${breakPoints.sm} {
 font-size: 35px;
 font-weight: 600;
 margin-top:95px;
}
`

export const CaixaTextoDiv = styled.div`
width:100%;
height:200px;
background:#e3e8e8;
display:flex;
justify-content:center;
align-items:center;
padding:0 0px; 
margin: auto;  

@media  ${breakPoints.md} {
 height:150px;

}

@media  ${breakPoints.sm} {
 height:220px;

}
`
export const TextoCaixaH2 = styled.h2`
 font-weight: 400;
 font-style: italic;
 font-size: 18pt;
 color: #000;
 text-align:center;
 width:1300px ;

 @media  ${breakPoints.lg} {
    font-size: 16pt;
     width:900px ;
}

 @media  ${breakPoints.md} {
    font-size: 14pt;
     width:600px ;
}

@media  ${breakPoints.sm} {
  font-size: 12pt;
     width:600px ;
}
`


export const ContainerEmpresa = styled.div`
  width: 100%;
  height:auto;
  display: flex;
  align-items:center;
  flex-direction:row;


  @media ${breakPoints.lg}{
    align-items:center;
    height:490px;

  }

  @media ${breakPoints.md} {
    height:auto;
    
   
}

`
export const Titulodiv = styled.div`
 width: 80%;
 height: 50px;
 display: flex;
 align-items:center;
 margin-top:2em;
 margin-left:6em;



 @media ${breakPoints.lg}{
  width: 77%;
 height: 90px;
 display: flex;
 align-items:center
}

 @media ${breakPoints.md}{
  justify-content:center;
  width: 100%;
  height: 4em;
  margin-bottom:20px;
 }

 @media  ${breakPoints.sm} {
  justify-content:center;
  width: 100%;
  height: 2em;
  margin-bottom:20px;
}

`
export const TituloH2 = styled.h2`
font-weight: 800;
color: #000;
font-size: 42px;

@media ${breakPoints.lg}{
  font-size: 29px;
}


@media ${breakPoints.md}{
    font-size: 29px;
    text-align:end;
}

@media ${breakPoints.sm}{
  font-size: 22px;
}

`
export const EmpresadivTextoimg = styled.div`
  width: 70%; 
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction:column;

  
 @media ${breakPoints.lg}{
  justify-content: start ;
}

  @media ${breakPoints.md} {
    flex-direction: column;
    height: auto;
    justify-content: center ;
    align-items: center;


  }
`;

export const Empresadivimg = styled.div`
  height: 365px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  
  @media ${breakPoints.md} {
    height: auto;
    
  }
`;

export const Empresaimg = styled.img`
  width: 500px;
  height:200; 


  @media screen and (max-width: 768px) {
    width: 90%; 
    height: auto; 

  }
`;

export const EmpresadivTexto = styled.div`
  height: 315px;
  display: flex;
  justify-content: center;
  padding-left:60px;
  padding-right:60px;
  flex-direction: column;
 



 @media ${breakPoints.lg}{
  height: auto;
}

  @media ${breakPoints.md} {
    width: 90%;
    align-items: center;
    margin-bottom:30px;
    
  }

  @media ${breakPoints.sm} {
    width: 100vw;
    
  }
`

export const BtnsaibaMaisdiv = styled.div`
 display:flex;

`

export const EmpresaTextoH3 = styled.p`
font-weight: 600;
color:#000;
text-align: left;
font-size:22px;
margin-left:1.5em;

@media ${breakPoints.lg}{
  font-size:18px;


}
@media ${breakPoints.md}{
    font-size: 20px;
    text-align:center;

}
@media ${breakPoints.sm}{
    font-size: 20px;
    text-align:center;
    margin:10px;

}

`

export const EmpresaTextoP = styled.p`
font-weight: 400;
 color:#000;
text-align: left;
font-size:22px;
margin-left:1.5em;
`




export const CardContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
height:'auto'; 
margin-top:36px;

  
`
export const CardCaixa = styled.div`
width:90%;
height:'auto'; 
display:flex;
text-align:center;
justify-content:space-around;





`
export const ItemCard01 = styled.div`
width:29%;



height:350px;  
 
  
display:flex;
background-image: url(${img_visao});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
border-radius:20px;


`
export const ItemCard02 = styled.div`
width:29%;


height:350px; 
 
display:flex;
background-image: url(${img_missa});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display:flex;
border-radius:20px;


`
export const ItemCard03 = styled.div`
width:28%;

height:500px; 
display:flex;
background-image: url(${img_valores});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
border-radius:20px;


`