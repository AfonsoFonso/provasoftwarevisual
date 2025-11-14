import React from "react";
import ListarTarefas from "./components/pages/tarefa/listar";
import CadastrarTarefa from "./components/pages/tarefa/cadastrar";
import ListarTarefasConcluidas from "./components/pages/tarefa/concluidas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Listar Tarefas</Link>
            </li>
            <li>
              <Link to="/tarefa/cadastrar">Cadastrar Tarefa</Link>
            </li>
            <li>
              <Link to="/tarefa/concluidas">Tarefas Concluídas</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ListarTarefas/>} />
          <Route path="/tarefa/cadastrar" element={<CadastrarTarefa/>} />
          <Route path="/tarefa/concluidas" element={<ListarTarefasConcluidas/>} />
        </Routes>
        <footer>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;