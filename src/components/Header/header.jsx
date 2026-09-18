
import './header.css'
import logo from '../../assets/logoo.jpeg';
import { SlLocationPin } from "react-icons/sl";
import { Link } from 'react-router-dom';



export default function Header() {
    return(
        <>
           <header className="header"> 
                 <div className="logo">
                    <img src={logo} alt="Logo" />
                 </div>

                 <div className="menu">
                    <a className="link" href="/">INíCIO</a>

                   <Link className="link" to="/nossa-historia">NOSSA HISTÓRIA</Link>

                    <Link className="link" to="/products">NOSSOS PRODUTOS</Link>

                    <a className="link" href="https://wa.me/5582993270963"
                        target="_blank"
                         rel="noopener noreferrer">FALE CONOSCO</a>

                    <Link className="link" to="/localizacao">
                      <SlLocationPin size={20} /> NOSSA LOCALIZAÇÃO
                    </Link>
                 </div>
           </header>
                 

                 

        </>
    )
}