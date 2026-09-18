
import { useState } from "react";
import "./headermobile.css";

import logo from "../../assets/logodois.jpeg";

import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function HeaderMobile() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="header-mobile">

      {/* TOPO */}
      <div className="header-mobile-top">

        <Link to="/" onClick={fecharMenu}>
          <img
            src={logo}
            alt="R4 Alimentos"
          />
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuAberto(true)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

      </div>

      {/* FUNDO ESCURO */}
      {menuAberto && (
        <div
          className="menu-overlay"
          onClick={fecharMenu}
        ></div>
      )}

      {/* MENU LATERAL */}
      <nav
        className={`menu-lateral ${
          menuAberto ? "aberto" : ""
        }`}
      >

        {/* TOPO DO MENU */}
        <div className="menu-topo">

         
          <button
            className="fechar-menu"
            onClick={fecharMenu}
            aria-label="Fechar menu"
          >
            ✕
          </button>

        </div>

        {/* LINKS */}
        <div className="menu-links">

          <Link to="/" onClick={fecharMenu}>
            INÍCIO
          </Link>

          <Link
            to="/nossa-historia"
            onClick={fecharMenu}
          >
            NOSSA HISTÓRIA
          </Link>

          <Link
            to="/products"
            onClick={fecharMenu}
          >
            NOSSOS PRODUTOS
          </Link>

          <Link
            to="/localizacao"
            onClick={fecharMenu}
          >
           
            NOSSA LOCALIZAÇÃO
          </Link>

        <a className="link" href="https://wa.me/5582993270963"
                        target="_blank"
                         rel="noopener noreferrer">FALE CONOSCO</a>
        
        

        </div>

      </nav>

    </header>
  );
}

