import "./localizacao.css";

function Localizacao() {
  return (
    <main className="pagina-localizacao">

      <section className="localizacao-header">
        <h1>Onde nos encontrar</h1>
        <p>
          Encontre a R4 Alimentos e venha nos visitar.
        </p>
      </section>

      <section className="localizacao-info">

        <div className="endereco">
          <h2>📍 Nossa localização</h2>

          <p>
            Piaçabuçu - Alagoas
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=-10.4058914,-36.4332119"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no Google Maps
          </a>
        </div>

       <div className="mapa">
      <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13199.374089100396!2d-36.43321188751114!3d-10.405891379225208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x704f7793b69ce15%3A0x808a891ce5a6b440!2zUi4gSm_Do28gUGVzc29hLCAxMDA1LCBQaWHDp2FidcOndSAtIEFMLCA1NzIxMC0wMDA!5e0!3m2!1spt-BR!2sbr!4v1789309639190!5m2!1spt-BR!2sbr"
         width="100%"
         height="100%"
         style={{ border: 0 }}
         allowFullScreen=""
         loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="Localização da R4 Alimentos"
  ></iframe>
</div>

      </section>

    </main>
  );
}

export default Localizacao;