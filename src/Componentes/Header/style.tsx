import styled from "styled-components";
import breakPoints from "../../breakPoints";
import { Link } from "react-router-dom";



export const PrincipalDivHeader = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;




export const ContainerDiv = styled.div`
 width:95%; 
 display:flex;
 align-items:center;
 flex-direction:row;
 justify-content:space-between;
 height:120px;
 padding-left:5em;
 padding-right:5em;



 @media ${breakPoints.md}{
 flex-direction:column;
 justify-content:center;
 width:100%; 
}

@media ${breakPoints.sm}{
 padding-left:0;
 padding-right:0;
 

 
}


 `
export const ImgDiv = styled.div`
height:190px;
display:flex;
align-items:center;
flex-direction:"row";
width:80%;


@media ${breakPoints.md} {
 justify-content:center;

}
`

export const LogoimgHeader = styled.img`
width:150px;


@media ${breakPoints.md} {
  width:130px;

}

`

export const  AcoesDiv = styled.div`
display:flex;
align-items:center;
flex-direction:row;
width:50%;
gap:32px;
justify-content:end;




@media ${breakPoints.lg} {
    width:100%;
    justify-content:end;

}

@media ${breakPoints.md} {
    width:100%;
    height:100px;
    gap:90px;
    margin-bottom:10px;
    justify-content:center;

}


@media ${breakPoints.mdd} {
   
    gap:50px;
  

}

@media ${breakPoints.sm}{
  width:100%;
gap:20px;
margin-bottom:0px;

 
}


`


export const LinksAcoes = styled(Link)`

  color:#000;
  
  @media ${breakPoints.md} {
   font-weight:400;
   font-size:18px;
}
@media ${breakPoints.sm}{
  font-size:12px;
 
}

`

