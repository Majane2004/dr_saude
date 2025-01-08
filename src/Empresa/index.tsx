import {
    PrincipalDiv, ContainerMain, BannerDiv, BannerdivTexto, Textoh1Banner,
   ContainerEmpresa, Titulodiv, TituloH2, EmpresadivTextoimg,
    Empresadivimg, EmpresadivTexto, EmpresaTextoH3, Empresaimg, BtnsaibaMaisdiv, EmpresaTextoP, CardContainer,
    CardCaixa,ItemCard01,ItemCard02,ItemCard03,ContainerPrevenir,CaixaDivPrevenir,TituloPrevenirH1,CaixaPrevenirDiv,
    ItemimgDiv01,ItemimgDiv02,Itensimg,Cardimg
} from "./style";

import Header from "../Componentes/Header"
import enfermeirasEmpresa from "/src/assets/enfermeiras_empresa.png"
import arco from "/src/assets/img_arco.png"
import avaliacao from "/src/assets/img_avaliacao.png"
import balanca from "/src/assets/img_balanca.png"
import filtro from "/src/assets/img_filtro.png"
import img_missa from "/src/assets/empre-missao.png"
import img_valores from "/src/assets/empre-valores.png"
import img_visao from "/src/assets/empre-visao.png"




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


                <ContainerEmpresa >
                    <EmpresadivTextoimg >
                        <Titulodiv >
                            <TituloH2>
                                Sobre a empresa
                            </TituloH2>
                        </Titulodiv>
                        <EmpresadivTexto>

                            <EmpresaTextoH3>
                                Cuidando da saúde dos seus colaboradores
                            </EmpresaTextoH3>

                            <BtnsaibaMaisdiv>
                                <EmpresaTextoP>
                                    Somos uma empresa especializada em serviços de saúde ocupacional, prontos para cuidar da saúde e segurança dos seus
                                    colaboradores. Nossa equipe multidisciplinar oferece soluções personalizadas para atender às suas necessidades
                                    de forma eficiente e confiável.
                                </EmpresaTextoP>
                            </BtnsaibaMaisdiv>
                            
                        </EmpresadivTexto>

                    </EmpresadivTextoimg>
                    <Empresadivimg>
                        <Empresaimg src={enfermeirasEmpresa} alt="duas enfermeiras no corredor" />
                    </ Empresadivimg >
                </ContainerEmpresa>

                <CardContainer>
                    <CardCaixa>
                        <ItemCard01 >
                            <Cardimg src={img_missa} alt="texto missao" />
                        </ItemCard01>
                        <ItemCard02>
                            <Cardimg src={img_visao} alt="texto visao" />
                        </ItemCard02>
                        <ItemCard03>
                            <Cardimg src={img_valores} alt="texto valores" />
                        </ItemCard03>
                      

                    </CardCaixa>
                </CardContainer>


                <ContainerPrevenir>
                    <CaixaDivPrevenir>
                        <TituloPrevenirH1>
                         Prevenir é melhor que remediar 
                        </TituloPrevenirH1>
                    </CaixaDivPrevenir>
                    <CaixaPrevenirDiv >
                        <ItemimgDiv01 >
                            <Itensimg src={arco} alt={"imagem de tiro ao alvo"} />
                        </ItemimgDiv01>

                        <ItemimgDiv02>
                            <Itensimg src={balanca} alt={"imagem de uma balanca"} />
                        </ItemimgDiv02>

                        <ItemimgDiv01 >
                            <Itensimg src={filtro} alt={"imagem de um filtro"} />
                        </ItemimgDiv01>

                        <ItemimgDiv02>
                            <Itensimg src={avaliacao} alt={"imagem avalaliações"} />
                        </ItemimgDiv02>
                    </CaixaPrevenirDiv>
                </ContainerPrevenir>
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