import React from 'react';

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="container-rodape">
        <div className="coluna">
          <h4>SUPORTE</h4>
          <p>Técnico</p>
          <p>Rastreamento</p>
        </div>
        <div className="coluna">
          <h4>REDES</h4>
          <p>LinkedIn</p>
          <p>YouTube</p>
        </div>
        <div className="coluna">
          <h4>PAGAMENTO</h4>
          <p>Pix / Cartão</p>
        </div>
      </div>
      <div className="direitos">© 2026 TechNova - Alta Performance</div>
    </footer>
  );
};

export default Rodape;