import React, { useState, useEffect } from 'react'; // Adicionamos o useEffect aqui
import '../index.css';
import banner1 from '../img/baner1.png';
import bannerNotebook from '../img/baner2.png';

const PromoSlideshow = () => {
  const banners = [
    { id: 1, alt: "TECHNOVA SUPER SEMANA", img: banner1 },
    { id: 2, alt: "TECHNOVA SEMANA DO NOTEBOOK", img: bannerNotebook }
  ];

  const [indiceAtivo, setIndiceAtivo] = useState(0);

  const proximoBanner = () => {
    setIndiceAtivo((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const anteriorBanner = () => {
    setIndiceAtivo((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  
  useEffect(() => {
    
    const intervalo = setInterval(() => {
      proximoBanner();
    }, 5000);

    
    return () => clearInterval(intervalo);
  }, [indiceAtivo]); 


  const bannerAtual = banners[indiceAtivo];

  return (
    <div className="promo-container">
      <div className="promo-slide">
        <img src={bannerAtual.img} alt={bannerAtual.alt} className="promo-image" />
      </div>

      
      
      <div className="indicadores">
        {banners.map((_, index) => (
          <div 
            key={index} 
            className={`ponto ${index === indiceAtivo ? 'ativo' : ''}`}
            onClick={() => setIndiceAtivo(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PromoSlideshow;