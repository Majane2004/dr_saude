import {
    PrincipalDiv, ContainerMain, BannerDiv, BannerdivTexto, Textoh1Banner,
    CaixaTextoDiv, TextoCaixaH2, ContainerEmpresa, Titulodiv, TituloH2, EmpresadivTextoimg,
    Empresadivimg, EmpresadivTexto, EmpresaTextoH3, Empresaimg, BtnsaibaMaisdiv, EmpresaTextoP, CardContainer,
    CardCaixa,ItemCard01,ItemCard02,ItemCard03
} from "./style"
import Header from "../Componentes/Header"
import enfermeiras from "/src/assets/duasMulheres.png"
import arco from "/src/assets/img_arco.png"
import avaliacao from "/src/assets/img_avaliacao.png"
import balanca from "/src/assets/img_balanca.png"
import filtro from "/src/assets/img_filtro.png"




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
                                SOBRE A EMPRESA
                            </TituloH2>
                        </Titulodiv>
                        <EmpresadivTexto>
                            <EmpresaTextoH3>
                                CUIDANDO DA SAÚDE DOS SEUS COLABORADORES
                            </EmpresaTextoH3>
                            <BtnsaibaMaisdiv>
                                <EmpresaTextoP>
                                    Somos uma empresa especializada em serviçios de saúde ocupacional, prontos para cuidar da saúde e segurança dos seus
                                    colaboradores. Nossa equipe multidisciplinar oferece soluções personalizadas para atender às suas necessidades
                                    de forma eficiente e confiável.
                                </EmpresaTextoP>
                            </BtnsaibaMaisdiv>
                        </EmpresadivTexto>

                    </EmpresadivTextoimg>
                    <Empresadivimg>
                        <Empresaimg src={enfermeiras} alt="duas enfermeiras no corredor" />
                    </ Empresadivimg >
                </ContainerEmpresa>

                <CardContainer>
                    <CardCaixa>
                        <ItemCard01>
                            

                        </ItemCard01>

                        <ItemCard02>

                        </ItemCard02>

                        <ItemCard03>

                        </ItemCard03>

                    </CardCaixa>
                </CardContainer>


                <div style={{display:'flex',flexDirection:'column',background:'red', marginTop:90,width:"100%", justifyContent:'center',
                     alignItems:'center',
                }}>
                    <div  style={{width:"100%",  flexDirection:'column',}}>
                        <h1 style={{color:'#000'}}>
                          PREVENIR É MELHOR QUE REMEDIAR

                        </h1>
                    </div>
                    <div  style={{width:"90%", height:500,display:'flex', flexDirection:'row',background:'green'
                    }}>
                        <div style={{ height:400, background:'blue', }}>
                            <img src={arco} alt={"imagem de tiro ao alvo"} style={{width:"60%"}}/>
                        </div>

                        <div style={{ height:400, background:'pink',display:'flex',alignItems:'end',  justifyContent:'center', }}>
                            <img src={balanca} alt={"imagem de uma balanca"} style={{width:"60%"}}/>
                        </div>

                        <div style={{ height:400, background:'blue'}}>
                            <img src={filtro} alt={"imagem de um filtro"} style={{width:"60%"}}/>
                        </div>

                        <div style={{ height:400, background:'yellow',display:'flex',alignItems:'end',justifyContent:'center',}}>
                            <img src={avaliacao} alt={"imagem avalaliações"} style={{width:"60%"}}/>
                        </div>
                    </div>
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