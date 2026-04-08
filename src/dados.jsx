import foto1 from './img/acer.webp';
import foto2 from './img/mac.webp';
import foto3 from './img/samsung.jfif';
import foto4 from './img/iphone.jfif';
import foto5 from './img/headset.jpg';
import foto6 from './img/mouse.jpg';
// Categoria: Notebooks
export const listaNotebooks = [
  {
    id: 101,
    nome: "Notebook Gamer Nitro V15",
    marca: "Acer",
    categoria: "Gaming",
    especificacoes: ["16GB RAM", "SSD 512GB", "RTX 4050"],
    preco: "5.499,00",
    parcelas: "10x R$ 549,90",
    estoque: "Pronta Entrega",
    imagem: foto1 // Exemplo de imagem
  },
  {
    id: 102,
    nome: "Macbook Pro M3",
    marca: "Apple",
    categoria: "Trabalho",
    especificacoes: ["M3 Pro", "18GB RAM", "512GB SSD"],
    preco: "16.999,00",
    parcelas: "10x R$ 1.699,90",
    estoque: "Últimas Unidades",
    imagem: foto2 // Exemplo de imagem
  }
];

// Categoria: Smartphones
export const listaSmartphones = [
  {
    id: 201,
    nome: "Galaxy S24 Ultra",
    marca: "Samsung",
    categoria: "Top de Linha",
    especificacoes: ["12GB RAM", "512GB S.", "Cam 200MP"],
    preco: "8.499,00",
    parcelas: "10x R$ 849,90",
    estoque: "Pronta Entrega",
    imagem: foto3 // Exemplo de imagem
  },
  {
    id: 202,
    nome: "iPhone 15 Pro",
    marca: "Apple",
    categoria: "Premium",
    especificacoes: ["A17 Pro", "256GB SSD", "Cam Pro"],
    preco: "9.299,00",
    parcelas: "10x R$ 929,90",
    estoque: "Poucas Unidades",
    imagem: foto4 // Exemplo de imagem
  }
];
// Categoria: Acessórios
export const listaAcessorios = [
  {
    id: 301,
    nome: "Headset HyperX Cloud",
    marca: "HyperX",
    categoria: "Áudio",
    especificacoes: ["Som Surround 7.1", "Microfone Removível"],
    preco: "450,00",
    parcelas: "5x R$ 90,00",
    estoque: "Pronta Entrega",
    imagem: foto5 // Exemplo de imagem
  },
  {
    id: 302,
    nome: "Mouse Logitech G502",
    marca: "Logitech",
    categoria: "Periféricos",
    especificacoes: ["25K DPI", "11 Botões Programáveis"],
    preco: "380,00",
    parcelas: "4x R$ 95,00",
    estoque: "Últimas Unidades",
    imagem: foto6 // Exemplo de imagem
  }
];