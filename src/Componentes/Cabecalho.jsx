import React from 'react';

const Cabecalho = () => {
  return (
    <header className="topo">
      <div className="container-topo">
        <h1 className="logo">TECH<span>NOVA</span></h1>
        <input type="text" placeholder="Buscar hardware..." className="busca" />
      </div>
    </header>
  );
};

export default Cabecalho;