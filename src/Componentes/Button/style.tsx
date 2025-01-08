import styled from "styled-components";
import breakPoints from "../../breakPoints";




interface ButtonPropsStyle {
  backgroundColor?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  fontWeight?: string;
  color?:string;
}


export const ButtonPadrao = styled.button<ButtonPropsStyle>` 
background-color: ${(props) => props.backgroundColor || '#009FC4'}; 
color:${(props)=>props.color || '#fff'}; 
font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '1rem')};
padding: 0.5rem 1rem;
border-radius: 120px;
border: none; cursor: pointer;
width: ${(props) => (props.width ? `${props.width}px` : '150px')};
height: ${(props) => (props.height ? `${props.height}px` : 'auto')}; 
font-weight: ${(props) => props.fontWeight || 'normal'};


@media ${breakPoints.md}{
  width:400px;

}

@media ${breakPoints.sm}{
  width:200px;

}





`

