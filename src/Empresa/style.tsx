import styled from "styled-components";
import bannerEmpresa from "/src/assets/banner_empresa.png";
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
  background-image: url(${bannerEmpresa});
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




export const ContainerEmpresa = styled.div`
  width: 100%;
  height:450px;
  display: flex;
  align-items:center;
  flex-direction:row;
  padding-top:2em;


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
height:auto; 
padding-top:2em;

@media ${breakPoints.lg}{
  background:red;



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
export const CardCaixa = styled.div`
width:90%;
height:'auto'; 
display:flex;
justify-content:space-between;
flex-direction: row ;


`
export const ItemCard01= styled.div`
height:auto;  
width:25%;
align-items:start;
display:flex;


`
export const ItemCard02 = styled.div`
height:auto;  
width:25%;
display:flex;
align-items:start;





`
export const ItemCard03 = styled.div`
  height: auto;  
  width:25%;
  margin-right:35px;
  display: flex;
  justify-content: end; 
  align-items: flex-start; /* Alinha os itens no final na vertical */



`

export const Cardimg = styled.img`
width:100%;




`

    

export const ContainerPrevenir =  styled.div`
display:flex;
flex-direction:column;
width:100%;
justify-content:space-between;
align-items:center;
margin-top:20px;

`

export const CaixaDivPrevenir  =styled.div`
width:100%;
flex-direction:column;




`
export const TituloPrevenirH1 = styled.h1`
color:#000;
text-transform: uppercase;
`

export const CaixaPrevenirDiv = styled.div`
width:90%;
height:560px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:93px;



`

export const ItemimgDiv01 = styled.div`
 width:229px;
 height:420px;


`

export const ItemimgDiv02 = styled.div`
 height:420px;

 width:229px;


 display:flex;
 align-items:end;
 justify-content:center;


`

export const Itensimg = styled.img`
height:315px;
width:229px;
`