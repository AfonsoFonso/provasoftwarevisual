import React, { useState, useEffect } from "react";

function ListarTarefas() {
  const [tarefas, setTarefas] = useState<any[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tarefas/listar');
      if (response.ok) {
        const data = await response.json();
        setTarefas(data);
        console.log('Tarefas carregadas:', data);
      }
    } catch (error) {
      console.log('Erro ao carregar tarefas:', error);
    }
  };

  return (
    <div>
      <h1>Listar Tarefas</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Status</th>
            <th>Criado Em</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.tarefaId}>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.status}</td>
              <td>{tarefa.criadoEm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTarefas;