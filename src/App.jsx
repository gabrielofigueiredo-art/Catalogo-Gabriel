import React, { useState } from 'react';
import Topo from './Componentes/Cabecalho.jsx';
import Rodape from './Componentes/Rodape.jsx';
import CartaoProduto from './Componentes/CartaoProduto.jsx';
import { listaNotebooks, listaSmartphones, listaAcessorios } from './dados.jsx'; 
import Slideshow from './Componentes/SlideShow.jsx';

import './index.css';

function App() {
  
  const [secao, setSecao] = useState("notebooks");

  return (
    <div className="site-todo">
      <Topo />

      <main className="container-principal">
        
       <Slideshow />
        <div className="menu">
          <button onClick={() => setSecao("notebooks")}>NOTEBOOKS</button>
          <button onClick={() => setSecao("smartphones")}>SMARTPHONES</button>
          <button onClick={() => setSecao("acessorios")}>ACESSÓRIOS</button>
        </div>

        <div className="grade-produtos">
          
          
          {secao === "notebooks" &&
            listaNotebooks.map((produto) => (
              <CartaoProduto key={produto.id} item={produto} />
            ))
          }

         
          {secao === "smartphones" &&
            listaSmartphones.map((produto) => (
              <CartaoProduto key={produto.id} item={produto} />
            ))
          }

          
          {secao === "acessorios" &&
            listaAcessorios.map((produto) => (
              <CartaoProduto key={produto.id} item={produto} />
            ))
          }
        </div>

      </main>

      <Rodape />
    </div>
  );
}

export default App;