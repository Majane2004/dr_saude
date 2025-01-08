import {
    PrincipalDiv, ContainerMain, BannerDiv, BannerdivTexto, Textoh1Banner,
    CaixaTextoDiv, TextoCaixaH2, ContainerEmpresa, TituloH2, EmpresadivTextoimg,
    Empresadivimg, EmpresadivTextobtn, EmpresaTextoH3, Empresaimg, BtnsaibaMaisdiv, ContainerContato,
    EmpresadivTextoimgContato, EmpresadivTextoContato, TituloContato, ContatoImg, TituloDivContato,
    BtnContatoDiv

} from "./style"
import Header from "../Componentes/Header"
import enfermeiras from "/src/assets/duasMulheres.png"
import Button from "../Componentes/Button"
import Contato from "/src/assets/Contato.png"
import { Link } from "react-router-dom"



export default function Dashboard() {
    return (
        <PrincipalDiv>
            <Header />
            <ContainerMain>
                <BannerDiv>
                    <BannerdivTexto>
                        <Textoh1Banner>
                            Cuidar de pessoas <span style={{ color: '#00DBFF' }}>fortalece a <br></br>sua empresa</span>
                        </Textoh1Banner>
                    </BannerdivTexto>
                </BannerDiv>

                <CaixaTextoDiv>
                    <TextoCaixaH2>
                        "Ao investir em saúde corporativa, as empresas não apenas cuidam de seus colaboradores,
                        mas também reduzem absentéismo, melhoram a retenção de talentos e criam uma cultura organizacional mais forte."
                    </TextoCaixaH2>
                </CaixaTextoDiv>


                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', width:"80%", 
                     alignItems:'center',          }}>
                    <ContainerEmpresa >



                        <EmpresadivTextoimg >
                            <Empresadivimg>
                                <TituloH2>
                                    Descubra a Nossa Empresa
                                </TituloH2>
                                <Empresaimg src={enfermeiras} alt="duas enfermeiras no corredor" />
                            </ Empresadivimg >
                        </EmpresadivTextoimg>


                        <EmpresadivTextobtn>
                        
                            <BtnsaibaMaisdiv>
                                <EmpresaTextoH3>
                                    Somos especialistas em cuidar do bem mais precioso de sua empresa: as pessoas. Nossa missão é promover o bem-estar e a
                                    qualidade de vida no ambiente de trabalho, ajudando empresas do Polo Industrial de Manaus e de toda a região a alcançarem
                                    maior produtividade, engajamento e satisfação de suas equipes.
                                </EmpresaTextoH3>

                                <Link to={"/empresa"}>
                                    <Button>
                                        Saiba mais
                                    </Button>
                                </Link>
                            </BtnsaibaMaisdiv>

                        </EmpresadivTextobtn>
                    </ContainerEmpresa>

                    <ContainerContato >
                        <EmpresadivTextoimgContato>

                            <EmpresadivTextoContato>

                                <TituloDivContato>
                                    <TituloContato>
                                        Quer saber mais?
                                    </TituloContato>
                                    <EmpresaTextoH3>
                                        Estamos prontos para transformar a saúde e segurança dos seus colaboradores!
                                        Entre em contato conosco pelo link abaixo e vamos conversar!
                                    </EmpresaTextoH3>

                                </TituloDivContato>


                                <BtnContatoDiv>
                                    <Button
                                        /* @ts-ignore */
                                        width={200}
                                    >
                                        Contato Dr Saúde
                                    </Button>

                                </BtnContatoDiv>

                            </EmpresadivTextoContato>

                        </EmpresadivTextoimgContato>

                        <ContatoImg>
                            <Empresaimg src={Contato} alt="uma mulher no telefone" />
                        </ ContatoImg >


                    </ContainerContato>
                </div>





                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#009FC4",
                    width: "100%",
                    height: 90,
                }}>

                </div>
            </ContainerMain>
        </PrincipalDiv>
    )
}