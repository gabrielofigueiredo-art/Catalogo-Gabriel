import React from 'react';

const CartaoProduto = ({ item }) => {
  return (
    <div className="cartao">
      <div className="container-foto">
        <img src={item.imagem} className="foto" alt={item.nome}/>
      </div>
      <div className="cabecalho-card">
        <span className="marca">{item.marca}</span>
        <span className="categoria">{item.categoria}</span>
      </div>
      <h3 className="titulo">{item.nome}</h3>
      <ul className="especificacoes">
        {item.especificacoes.map((e, i) => <li key={i}>• {e}</li>)}
      </ul>
      <div className="rodape-card">
        <p className="valor">R$ {item.preco}</p>
        <p className="parcelas">{item.parcelas}</p>
        <button className="botao-comprar">{item.estoque}</button>
      </div>
    </div>
  );
};

export default CartaoProduto;