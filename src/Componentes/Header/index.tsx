import { PrincipalDivHeader,ContainerDiv, ImgDiv,AcoesDiv,LinksAcoes,LogoimgHeader } from "./style"
import logo_Header from "/src/assets/logoHeader.png";


export default function Header(){
    return(
        <PrincipalDivHeader>
            <ContainerDiv>
                <ImgDiv>
                    <LogoimgHeader src={logo_Header} alt="Logo do Header"/>

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