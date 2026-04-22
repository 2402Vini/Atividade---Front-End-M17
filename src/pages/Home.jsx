// src/pages/Home.jsx

import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: "",
  });

  // Simulação de API
  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          nome: "Camiseta",
          preco: "49.90",
          descricao: "Camiseta confortável",
          imagem: "https://via.placeholder.com/150",
        },
        {
          nome: "Tênis",
          preco: "199.90",
          descricao: "Tênis esportivo",
          imagem: "https://via.placeholder.com/150",
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novoProduto = {
      ...form,
      imagem: "https://via.placeholder.com/150",
    };

    setProdutos([...produtos, novoProduto]);

    setForm({
      nome: "",
      preco: "",
      descricao: "",
    });
  }

  return (
    <div>
      <h1>Catálogo de Produtos</h1>

      {/* FORMULÁRIO */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          value={form.nome}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
          required
        />

        <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          required
        />

        <button type="submit">Adicionar</button>
      </form>

      {/* LISTAGEM */}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="grid">
          {produtos.map((produto, index) => (
            <ProdutoCard
              key={index}
              nome={produto.nome}
              preco={produto.preco}
              descricao={produto.descricao}
              imagem={produto.imagem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;