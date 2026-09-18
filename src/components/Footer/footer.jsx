
import './footer.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import logo from '../../assets/logo.jpeg';

export default function Footer() {
    return(
        <>
            <footer className="footer"> 


                <div className="footer-content">
                   
                  <div className='text'> 
                      <h3>R<span style={{ color: '#f4f11d' }} >4</span> Alimentos</h3>
                      <p>Preço baixo e qualidade no atendimento!</p>
                      
                  </div>
                  <div className="contacts">
                    <h3> 
                       <FaWhatsapp size={20} /> (82) 99327-0963 <br/>
                       <MdOutlineEmail size={20} /> <a href="mailto:r4alimentos@gmail.com" style={{ color: '#fff' }}>r4alimentos@gmail.com</a> <br/>
                       <SlLocationPin size={20} /> Rua João Pessoa, 1005, Piaçabuçu, Alagoas, Brasil. 
                    </h3>
                  </div>
                 </div>   
                 <div className='copyright'><p>© 2026 R4 Alimentos. Todos os direitos reservados. </p></div>   
                     
                
               
            </footer>
        </>
    )
}