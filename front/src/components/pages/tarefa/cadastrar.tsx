import React, { useState } from "react";

function CadastrarTarefa() {
  const [titulo, setTitulo] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/tarefas/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Titulo: titulo })
      });

      if (response.ok) {
        alert("Tarefa cadastrada com sucesso!");
        setTitulo("");
      } else {
        alert("Erro ao cadastrar tarefa.");
      }
    } catch (error) {
      alert("Erro ao conectar com a API.");
    }
  };

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titulo">Título:</label>
        <br />
        <input 
          type="text" 
          id="titulo" 
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarTarefa;