import './nossaHistoria.css'
import logo from "../assets/foto2.jpeg";
import { TbTargetArrow} from "react-icons/tb";
import { RxEyeOpen } from "react-icons/rx";
import { FaHandshake } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { RxPeople } from "react-icons/rx";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";

export default function NossaHistoria() {
  return (
    <section className='section' >

        <div className='title'>
             <h1>NOSSA HISTÓRIA</h1>
             <p>Mais que distribuir alimentos, construímos relações de confiança</p>
        </div>

        <div className='page'>
         <div className='img1'>
            <img src={logo} alt="Logo" /> 
         </div>
        
         <div className='text1'> 
              
              <h2>QUEM SOMOS</h2> <br/>
                              
              <p>Conheça mais sobre a R4 Alimentos e nosso compromisso
                 com a qualidade e o atendimento excepcional.
                 A R4 Alimentos é uma empresa dedicada a fornecer produtos alimentícios de
                 alta qualidade a seus clientes, com foco em excelência no atendimento e 
                 preços justos. Atuando há mais de 10 anos no mercado. Atendendo mais de 3 estados.
                 Com compromisso, qualidade e agilidade, oferecemos as melhores soluçoes 
                 para abastecer o seu negócio e ajudar no seu crescimento <br/> <br/>
                 <strong>Aqui, nossa prioridade é você.</strong></p>
          </div>
             
          </div>

          <div className='vision'>
                 <div className='missao'>
                   <h2>  <TbTargetArrow color='#fff'size={30} /> Missão</h2> <br/>
                      <p>Fornecer produtos <br/> 
                        de qualidade <br/>
                        com agilidade, <br/>
                        confiança e excelência <br/>
                        no atendimento.</p>
                 </div>
                
                 <div className='visao'>
                     <h2><RxEyeOpen size={30} color='#fff'/> Visão</h2> <br/>
                       <p>Ser referência no <br/>
                         segmento de <br/>
                         distribuição de alimentos, <br/>
                         contribuindo para o crescimento <br/>
                         dos nossos clientes.</p>
                 </div>    
              
                 <div className='valores'> 
                      <h2> <FaHandshake size={30} color='#fff' /> Valores</h2> <br/>
                      <p> Compromisso <br/>
                          Honestidade <br/>
                          Qualidade   <br/>
                          Respeito ao cliente <br/>
                          Responsabilidade</p>
                  </div>
             </div>

             <div className='cards'>
                <div className='card1'>
                  <h1><FaBoxOpen size={40}/>+500</h1>
                  <h3>PRODUTOS</h3>
                  <p>variedade para o seu comércio</p>
                </div>

                 <div className='card1'>
                  <h1> <RxPeople size={40} /> +100</h1>
                  <h3>CLIENTES</h3>
                  <p>Atendidos com confiança</p>
                </div>

                 <div className='card1'>
                  <h1> <FaRegCalendarAlt size={40} /> +10</h1>
                  <h3>ANOS</h3>
                  <p>De experiência no mercado</p>
                </div>

                 <div className='card1'>
                  <h1> <CiDeliveryTruck size={40} /> ENTREGA </h1>
                   <h3>RÁPIDA</h3> 
                  <p>Agilidade para todo pedido</p>
                </div>
             </div>
        

    </section>
  );
}