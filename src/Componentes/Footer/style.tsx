import styled from "styled-components";
import breakPoints from "../../breakPoints";



export const FooterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
background: #009FC4;
width:100%;
height: 110px;

@media ${breakPoints.mdd}{
    width:100%;
    height: 90px;
 
}

@media ${breakPoints.sm}{
    width:100%;
    height: 60px;
 
}

`
export const DesenvolvidoImg = styled.img `
width:20%;
height: 90px;

@media ${breakPoints.md}{
    width:30%;
    height: 80px;
 
}
@media ${breakPoints.mdd}{
    width:55%;
    height: 65px;
 
}

@media ${breakPoints.sm}{
    width:30%;
    height: 50px;
 
}
@media ${breakPoints.pp}{
    width:45%;
    height: 55px;
 
}


`