import { ButtonPadrao } from "./style"

interface ButtonProps {
    children:string
  }


export default function Button (props:ButtonProps){
    return(
        <ButtonPadrao style={{ width: 150, height: 40, fontSize: 18, fontWeight: "600" }}>
            {props.children}
        </ButtonPadrao>
    )
}