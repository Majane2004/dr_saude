import { PrincipalDivHeader } from "./style"
import logo_Header from "/src/assets/logoHeader.png";


export default function Header(){
    return(
        <PrincipalDivHeader>
            <div style={{width:'95%', display:'flex', alignItems:'center', flexDirection:'row', justifyContent:'space-between',height:120}}>
                <div style={{ height:90,display:'flex',alignItems:'center',flexDirection:"row",width:'80%'}}>
                    <img src={logo_Header} alt="Logo do Header" style={{width:150, marginLeft:50}} />

                </div>
                <div style={{ display:'flex',alignItems:'center',flexDirection:"row",width:'50%',gap:32,justifyContent:'center'}}>
                    <div style={{ display:'flex', }}>
                        <a href="###" style={{color:'#000'}}>Home</a>
                       
                    </div>
                    <div style={{ display:'flex', justifyContent:'space-between',}}>
                        <a href="###" style={{color:'#000'}}>Nossa empresa</a>
                    
                    </div>
                    <div style={{ display:'flex', justifyContent:'space-between',}}>
                        <a href="###" style={{color:'#000'}}>Nossos serviços</a>
                    </div>
                    <div style={{ display:'flex', justifyContent:'space-between',}}>
                        <a href="###" style={{color:'#000'}}>Contato</a>
                    </div>
                </div>
            </div>
        </PrincipalDivHeader>
    )
}