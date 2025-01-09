import styled from "styled-components";
import breakPoints from "../../breakPoints";



export const FooterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
background: #009FC4;
width:100%;
height: auto;



`
export const DesenvolvidoImg = styled.img `
width:22%;
height: auto;



@media ${breakPoints.md}{
    width:30%;
 
}
@media ${breakPoints.mdd}{
    width:55%;
 
}

@media ${breakPoints.sm}{
    width:30%;
 
}
@media ${breakPoints.pp}{
    width:45%;
 
}


`