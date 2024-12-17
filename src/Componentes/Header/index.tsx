import { PrincipalDivHeader,ContainerDiv, ImgDiv,AcoesDiv,LinksAcoes } from "./style"
import logo_Header from "/src/assets/logoHeader.png";


export default function Header(){
    return(
        <PrincipalDivHeader>
            <ContainerDiv>
                <ImgDiv>
                    <img src={logo_Header} alt="Logo do Header" style={{width:150,}} />

                </ImgDiv>
                <AcoesDiv>
                    <div style={{ display:'flex', }}>
                        <LinksAcoes href="###" >Home</LinksAcoes>
                       
                    </div>
                    <div style={{ display:'flex'}}>
                        <LinksAcoes href="###">Nossa empresa</LinksAcoes>
                    
                    </div>
                    <div style={{ display:'flex'}}>
                        <LinksAcoes href="###" >Nossos serviços</LinksAcoes>
                    </div>
                    <div style={{ display:'flex'}}>
                        <LinksAcoes href="###">Contato</LinksAcoes>
                    </div>
                </AcoesDiv>
            </ContainerDiv>
           
        </PrincipalDivHeader>
    )
}