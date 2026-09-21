
import { useNavigate } from 'react-router-dom';
import './hero.css'
import logo from '../../assets/logo.jpeg';
import image from '../../assets/Atacadistas.jpg';
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    const navigate = useNavigate();
    return(
        <>
         <section className='hero'>
                <div className='hero-content'>
                  <p>Bem vindo à R<span style={{ color: '#f4f11d' }}>4 </span>alimentos</p>

                  <h1>DISTRIBUINDO <br/>
                   <span  style={{ color: '#f4f11d' }}>QUALIDADE </span>BOM ATENDIMENTO <br/>
                   E PREÇO JUSTO
                  </h1>
                  <p> Trabalhamos com produtos alimentícios em geral no ramo de atacado. <br/>
                      Atendemos supermercados, mercearias e outros atacados de pequeno portes.</p>

                    
                  <div className='hero-content-buttons'>
                      <button onClick={() => navigate('/orcamento')}>SOLICITAR ORÇAMENTO</button>
                      
                      <a className="whatsapp" href="https://wa.me/5582993270963?text=Olá!%20Gostaria%20de%20receber%20o%20catálogo%20de%20produtos%20da%20R4%20Alimentos." target="_blank" rel="noreferrer"><FaWhatsapp /> 
                          FALAR NO WHATSAPP</a>
                    </div>
                </div>
            </section>


        </>
    )
}