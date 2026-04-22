// src/components/ProdutoCard.jsx

function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <strong>R$ {preco}</strong>
    </div>
  );
}

export default ProdutoCard;