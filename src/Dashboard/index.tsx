import { PrincipalDiv } from "./style"
import Header from "../Componentes/Header"
import banner from "/src/assets/banner01.png"


export default function Dashboard() {
    return (
        <PrincipalDiv>
            <Header />
            <div style={{ width: "100%", display: 'flex', justifyContent: 'center', }}>
                <div style={{
                    height: 690,
                    width: 1440,
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

            </div>
        </PrincipalDiv>
    )
}