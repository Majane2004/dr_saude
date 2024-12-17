import styled from "styled-components";



export const PrincipalDivHeader = styled.div `
 display: flex;
 width: 100%;
 height: 100%;
 flex-direction: row;
 justify-content: center;
 align-items: center;


`
export const ContainerDiv = styled.div`
 width:95%; 
 display:flex;
 align-items:center;
 flex-direction:row;
 justify-content:space-between;
 height:120px;
 padding-left:5em;
 padding-right:5em;


 @media screen and (max-width: 768px) {
 flex-direction:column;
 justify-content:center;
 width:100%; 
}

 `
export const ImgDiv = styled.div`
height:170px;
display:flex;
align-items:center;
flex-direction:"row";
width:80%;


@media screen and (max-width: 768px) {
 justify-content:center;

}
`

export const  AcoesDiv = styled.div`
display:flex;
align-items:center;
flex-direction:row;
width:50%;
gap:32px;
justify-content:center;


@media screen and (max-width: 768px) {
    width:100%;
    gap:50px;
    margin-bottom:10px;
}

`
export const LinksAcoes = styled.a`

  color:#000;
  
  @media screen and (max-width: 768px) {
   font-weight:400;
   font-size:14px;
}


`

