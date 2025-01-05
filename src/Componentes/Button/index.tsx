import { ButtonPadrao } from "./style"

interface ButtonProps {
    children:string
  }


export default function Button (props:ButtonProps){
    return(
        <ButtonPadrao{...props}>
            {props.children}
        </ButtonPadrao>
    )
}