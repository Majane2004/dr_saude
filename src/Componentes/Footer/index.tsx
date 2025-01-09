import { FooterDiv, DesenvolvidoImg } from "./style"
import desenvolvido from  "/src/assets/Desenvolvido.png";

export default function Footer() {


    return (
       <FooterDiv>
            <DesenvolvidoImg src={desenvolvido} alt="Desenvolvido por MJ produção edição consultoria"/>
       </FooterDiv>

    )


}