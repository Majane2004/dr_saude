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
  width: 90%;
  height:500px;
  display: flex;
  align-items:center;
  flex-direction:row;
  gap:70px;

  @media ${breakPoints.lg}{
    align-items:center;
    height:490px;
    width: 100%;


  }

  @media ${breakPoints.md} {
  height:auto;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:18px;
    
  margin-top:2em;


    
   
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

 @media  ${breakPoints.sm} {
  justify-content:center;
  width: 100%;
  height: 2em;
  margin-bottom:20px;
}

`
export const TituloH2 = styled.h2`
font-weight: 600;
color: #000;
font-size: 33px;
text-align:left;


@media ${breakPoints.lg}{
  font-size: 29px;
}


@media ${breakPoints.md}{
    font-size: 29px;
    text-align:end;
}

@media ${breakPoints.sm}{
  font-size: 22px;
  text-align:center;

}

`
export const EmpresadivTextoimg = styled.div`
  height: 450px;
  display: flex;
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
  height: 450px;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction:column;
  
  


  @media ${breakPoints.md} {
    height: auto;
    width:100%;
   align-items: center;


    
  }
  @media ${breakPoints.sm} {
    height: auto;

   align-items: center;


    
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
  width: 55%;
  height: 450px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items:center;

 @media ${breakPoints.lg}{
  height: auto;
}

  @media ${breakPoints.md} {
    width: 90%;
    align-items: center;
  justify-content: center;

    
  }

  @media ${breakPoints.sm} {
    width: 100vw;
    
  }
`

export const BtnsaibaMaisdiv = styled.div`
 display:flex;
 flex-direction:column;
 height: 350px;
 align-items:start;
 justify-content:center;
 padding-bottom:20px;


 @media ${breakPoints.md}{
    justify-content:space-around; 
    align-items:center;
    height: 310px;
   padding-bottom:0px;







}
 

`

export const EmpresaTextoH3 = styled.p`
font-weight: 400;
 color:#000;
text-align: left;
font-size:22px;


@media ${breakPoints.lg}{
  font-size:18px;


}
@media ${breakPoints.md}{
    font-size: 20px;
    text-align:center;
    padding-left:0.5em;
    padding-right:0.5em;


}
@media ${breakPoints.sm}{
    font-size: 16px;
    text-align:center;
    margin:10px;

}

`
export const ContainerContato = styled.div`
  width: 90%;
  height:390px;
  display: flex;
  align-items:start;
  flex-direction:row;
  margin-top:3em;


  @media ${breakPoints.lg}{
    align-items:center;
    height:490px;
    width: 100%;


  }

  @media ${breakPoints.md} {
    height:auto;
   flex-direction:column-reverse;
   margin-top:6em;
   
}

@media ${breakPoints.sm} {
    height:auto;
   flex-direction:column-reverse;
   padding-top:2em;
   margin-top:0;

   justify-content:center;



  
   
    
    
   
}

`

export const EmpresadivTextoimgContato = styled.div`
  width:50%;
  height: 350px;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:center;
  padding-left:2px;

  
 @media ${breakPoints.lg}{
  justify-content: start ;
}

  @media ${breakPoints.md} {
     width:90%;
    flex-direction: column;
    justify-content: center ;
    align-items: center;
    height: 320px;

  }


  @media ${breakPoints.sm} {
     width:90%;
    flex-direction: column;
    justify-content: center ;
    align-items: center;
    height: 260px;





  }
`;

export const TituloDivContato = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;


 
  @media ${breakPoints.md} {
   width:100%;
  align-items:'center';
  height: 200px;
  justify-content:center;
  

  }
 
 `

export const EmpresadivTextoContato = styled.div`
  width:100%;
  height: 315px;
  display: flex;
  justify-content: center;
  flex-direction: column;
 
 @media ${breakPoints.lg}{
}

  @media ${breakPoints.md} {
    width: 90%;
    align-items: center;
    margin-bottom:30px;
   justify-content: space-around;



    
    
  }

  @media ${breakPoints.sm} {
    width: 80vw;
   height: 300px;
   justify-content:flex-start;




    
  }
  `

export const TituloContato = styled.h1`
  font-weight: 600;
  color:#000;
  text-align: left;
  font-size:32px;
  width:100%;

@media ${breakPoints.md} {
  text-align: center;

    
  }
  @media ${breakPoints.sm} {
  text-align: center;
  font-size:22px;


    
  }
  `

export const ContatoImg = styled.div`
  height: 365px;
  display: flex;
  justify-content: flex-end;
  align-items: start;
  width:50%;

  @media ${breakPoints.lg} {

  }

  @media ${breakPoints.md} {
    justify-content: center;
    height: 'auto';
    width:100%;
  }

  @media ${breakPoints.sm} {
    justify-content: center;
    height: 230px;
    width:100%;
  align-items: center;
}

`

export const BtnContatoDiv = styled.div`
 display:flex;
 flex-direction:column;
 height: 350px;
 align-items:start;
 justify-content:center;
 padding-bottom:20px;


 @media ${breakPoints.md} {
    height: 20px;
   padding-bottom:0px;


    ;


  }

  @media ${breakPoints.sm} {
    height: 20px;
    padding-bottom:0px;
   justify-content:flex-end;
   margin-top:2em;


 

    ;


  }

`