import styled from "styled-components";



interface ButtonPropsStyle{
    backgroundColor?: string
}


export const ButtonPadrao = styled.button<ButtonPropsStyle>`
  background-color: ${(props) => props.backgroundColor || '#009FC4'};
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;


`

