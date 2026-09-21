import { useState } from "react";
import './orcamento.css';

function Orcamento() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    cidade: "",
    telefone: "",
    produtos: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const enviarWhatsApp = () => {
    const mensagem = `
         SOLICITAÇÃO DE ORÇAMENTO:

         Nome: ${form.nome}
         Empresa: ${form.empresa}
         Cidade: ${form.cidade}
         Telefone: ${form.telefone}

         Produtos de interesse:
${form.produtos}
`;

    const numero = "5582993270963";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="orcamento">
      <div className="orcamento-container">
        <h2>Solicitar Orçamento</h2>

        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="empresa">Empresa</label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            placeholder="Nome da empresa"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            placeholder="Sua cidade"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone/WhatsApp</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="(XX) XXXXX-XXXX"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="produtos">Produtos de interesse</label>
          <textarea
            id="produtos"
            name="produtos"
            placeholder="Quais produtos você tem interesse?"
            onChange={handleChange}
          />
        </div>

        <button className="btn-enviar" onClick={enviarWhatsApp}>
          Enviar orçamento
        </button>
      </div>
    </div>
  );
}

export default Orcamento;