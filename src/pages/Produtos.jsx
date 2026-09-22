import "./produtos.css";

import cereais from "../assets/Atacadistas.jpg";
import biscoitos from "../assets/Atacadistas.jpg";
import bomboniere from "../assets/Atacadistas.jpg";
import laticionios from "../assets/Atacadistas.jpg";
import variados from "../assets/Atacadistas.jpg";
import bebidas from "../assets/Atacadistas.jpg";
import limpeza from "../assets/Atacadistas.jpg";
import higienePessoal from "../assets/Atacadistas.jpg";



export default function Produtos() {
  const categorias = [
    {
      nome: "Cereais",
      imagem: cereais,
    },
    {
      nome: "Biscoitos",
      imagem: biscoitos,
    },
    {
      nome: "Bomboniere",
      imagem: bomboniere,
    },
    {
      nome: "Laticinios",
      imagem: laticionios,
    },
    {
      nome: "Produtos variados",
      imagem: variados,
    },
    {
      nome: "Bebidas",
      imagem: bebidas,
    },
     {
      nome: "Limpeza",
      imagem: limpeza,
    },
     {
      nome: "Higiene Pessoal",
      imagem: higienePessoal,
    },
  ];

  return (
    <section className="produtos">

      <div className="banner-produtos">
        <h1>Nossos Produtos</h1>
        <p>
          Qualidade, variedade e preço justo para
          abastecer seu negócio.
        </p>
      </div>

      <div className="categorias-container">
        {categorias.map((categoria, index) => (
          <div className="card" key={index}>
            <img
              src={categoria.imagem}
              alt={categoria.nome}
            />
            <h3>{categoria.nome}</h3>

            <a
              href="https://wa.me/5582993270963?text=Olá!%20Gostaria%20de%20solicitar%20o%20orçamento%20para%20os%20produtos%20da%20R4%20Alimentos."
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento
            </a>
          </div>
        ))}
      </div>
    <section className="catalogo">
      <div className="catalogo-conteudo">
        <h2>Não encontrou o que procura?</h2>

        <p>
           Entre em contato conosco pelo WhatsApp e solicite nosso catálogo completo.
        </p>

        <a
           href="https://wa.me/5582993270963?text=Olá!%20Gostaria%20de%20receber%20o%20catálogo%20de%20produtos%20da%20R4%20Alimentos."
           target="_blank"
           rel="noopener noreferrer"
           className="btn-whatsapp">

           Solicitar Catálogo no WhatsApp
        </a>

      </div>
    </section>

    </section>
  );
}