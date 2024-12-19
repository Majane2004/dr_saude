import styled from "styled-components";
import banner from "/src/assets/banner01.png";
import breakPoints from "../breakPoints";



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
`


export const ContainerEmpresa = styled.div`
  width: 100%;
  height:auto;
  display: flex;
  justify-content: space-around;
  align-items:center;
  flex-direction:column;


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

`
export const TituloH2 = styled.h2`
font-weight: 600;
color: #000;
font-size: 33px;

@media ${breakPoints.lg}{
  font-size: 29px;


}

@media ${breakPoints.md}{
    font-size: 29px;
    text-align:end;
}

`
export const EmpresadivTextoimg = styled.div`
  width: 80%; 
  height: 450px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 35px;

  
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



  @media screen and (max-width: 768px) {
    height: auto; /* Ajuste para o tamanho do conteúdo */
    
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

export const EmpresadivTextobtn = styled.div`
  height: 315px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

 @media ${breakPoints.lg}{
  height: auto;


}

  @media ${breakPoints.md} {
    width: 90%;
    align-items: center;
    margin-bottom:30px;
    
  }
`

export const BtnsaibaMaisdiv = styled.div`
 display:flex;


`

export const EmpresaTextoH3 = styled.p`
font-weight: 400;
 color:#000;
text-align: left;
font-size:22px;


@media ${breakPoints.lg}{
  font-size:18px;


}
@media screen and (max-width:768px){
    font-size: 20px;
    text-align:center;

}

`