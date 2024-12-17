import { PrincipalDiv } from "./style"
import Header from "../Componentes/Header"
import banner from "/src/assets/banner01.png"
import enfermeiras from "/src/assets/duasMulheres.png"
import Button from "../Componentes/Button"


export default function Dashboard() {
    return (
        <PrincipalDiv>
            <Header />
            <div style={{ width: "100%", display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                    height: 690,
                    width: "100%",
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover', // anexar a img do tamanho da tela
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',

                }}>
                    <div style={{ width: 1440, padding: 80, height: 420 }}>
                        <h1 style={{ width: 800, textAlign: 'start', fontSize: 70, fontWeight: 600 }}>
                            Cuidar de pessoas <span style={{ color: '#00DBFF' }}>fortalece a sua empresa</span>
                        </h1>


                    </div>

                </div>

                <div style={{
                    width: '100%',
                    height: '200px',
                    background: '#e3e8e8',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 0px', /* Ajusta o espaçamento interno */
                    margin: 'auto'    /* Centraliza na tela */
                }}>
                    <h2 style={{
                        fontWeight: 400,
                        fontStyle: 'italic',
                        fontSize: '19pt',
                        color: '#000',
                        textAlign: 'center',
                    }}>
                        "Ao investir em saúde corporativa, as empresas não apenas cuidam de seus colaboradores, mas também reduzem absentéismo, melhoram a retenção de talentos e criam uma cultura organizacional mais forte."
                    </h2>
                </div>


                <div style={{
                    width: '100%', display: 'flex', height: '650px',
                    justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column',
                }} >
                    <div style={{ width: '78%', height: '50px', display: 'flex', alignItems: 'center',  marginTop:50}} >
                        <h2 style={{ fontWeight: 600, color: '#000', fontSize: 39 }}>
                            Descubra a Nossa Empresa
                        </h2>

                    </div>

                    <div style={{
                        width: '80%', height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center',
                       
                        gap: 49
                    }} >
                        <div style={{ height: 260, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <img src={enfermeiras} alt="duas enfermeiras no corredor" style={{ width: 500, height: 380 }} />
                        </div>

                        <div style={{ height: 390, display: 'flex', justifyContent: 'left', flexDirection:'column',  }}>
                            <h2 style={{ fontWeight: 400, color: '#000', textAlign: 'left' }}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                            </h2>
                            <Button>
                                Saiba mais
                            </Button>

                        </div>

                    </div>

                </div>

                <div style={{ width: "100%", height: 100, background: "#009FC4" }}>

                </div>

            </div>

        </PrincipalDiv>
    )
}