import {
    PrincipalDiv, ContainerMain, BannerDiv, BannerdivTexto, Textoh1Banner,
    CaixaTextoDiv, TextoCaixaH2, ContainerEmpresa, Titulodiv, TituloH2, EmpresadivTextoimg,
    Empresadivimg, EmpresadivTextobtn, EmpresaTextoH3, Empresaimg, BtnsaibaMaisdiv
} from "./style"
import Header from "../Componentes/Header"
import enfermeiras from "/src/assets/duasMulheres.png"
import Button from "../Componentes/Button"


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

                <ContainerEmpresa >

                    <Titulodiv >
                        <TituloH2>
                            Descubra a Nossa Empresa
                        </TituloH2>
                    </Titulodiv>

                    <EmpresadivTextoimg >
                        <Empresadivimg>
                            <Empresaimg src={enfermeiras} alt="duas enfermeiras no corredor" />
                        </ Empresadivimg >
                        <EmpresadivTextobtn>
                            <EmpresaTextoH3>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                            </EmpresaTextoH3>

                            <BtnsaibaMaisdiv>
                                <Button>
                                    Saiba mais
                                </Button>
                            </BtnsaibaMaisdiv>

                        </EmpresadivTextobtn>
                    </EmpresadivTextoimg>
                </ContainerEmpresa>
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