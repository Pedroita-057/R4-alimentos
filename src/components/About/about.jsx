
import './about.css'
import logo from '../../assets/logoo.jpeg';

export default function About() {
    return(
        <>
         <section className='about'>
                <div className='img'>
                     <img src={logo} alt="Logo" /> 
                </div>

                <div className='text'> 
                      <h1>NOSSO DIFERENCIAL</h1>
                
                   <p> Mais do que distribuir produtos,
               entregamos confiança, agilidade
               e compromisso aos nossos clientes.

               Trabalhamos com um amplo portfólio
               de produtos, atendimento
               personalizado e entregas rápidas,
               ajudando supermercados,
               mercadinhos e comerciantes a
               manterem seus negócios sempre
               abastecidos.

               Nossa missão é construir
               relacionamentos duradouros através
               da qualidade e da excelência no
               atendimento.</p>
                </div>
          </section>

        </>
    )
}