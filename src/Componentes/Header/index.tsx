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
                        <LinksAcoes to={"/"} >Home</LinksAcoes>
                       
                    </div>
                    <div style={{ display:'flex'}}>
                        <LinksAcoes to={"empresa"}>Nossa empresa</LinksAcoes>
                    
                    </div>
                    <div style={{ display:'flex'}}>
                        <LinksAcoes to={"###"}>Nossos serviços</LinksAcoes>
                    </div>
                    <div style={{ display:'flex'}}>
                        <LinksAcoes to={"###"}>Contato</LinksAcoes>
                    </div>
                </AcoesDiv>
            </ContainerDiv>
           
        </PrincipalDivHeader>
    )
}