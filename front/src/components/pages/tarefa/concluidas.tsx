import React, { useState, useEffect } from "react";

function ListarTarefasConcluidas() {
  const [tarefas, setTarefas] = useState<any[]>([]);

  useEffect(() => {
    carregarTarefasConcluidas();
  }, []);

  const carregarTarefasConcluidas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tarefas/listar');
      if (response.ok) {
        const data = await response.json();
        const tarefasConcluidas = data.filter((tarefa: any) => tarefa.status === "Concluída");
        setTarefas(tarefasConcluidas);
        console.log('Tarefas concluídas carregadas:', tarefasConcluidas);
      }
    } catch (error) {
      console.log('Erro ao carregar tarefas concluídas:', error);
    }
  };

  return (
    <div>
      <h1>Tarefas Concluídas</h1>
      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa concluída encontrada.</p>
      ) : (
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
      )}
    </div>
  );
}

export default ListarTarefasConcluidas;
