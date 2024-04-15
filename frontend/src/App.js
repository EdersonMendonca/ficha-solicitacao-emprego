import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import FichaCadastro from './components/FormularioEmprego';
import RemoverSolicitacao from './components/RemoverSolicitacao';
import Rodape from './components/Rodape';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div className="App">
      <Menu />
        <Routes>
          <Route path="/" element={<FichaCadastro />} />
          <Route path="fichaSolicitacao" element={<FichaCadastro />} />
          <Route path="removerSolicitacao" element={<RemoverSolicitacao />} />
        </Routes>
        <Rodape />
      </div>
    </Router>

  );
}

export default App;
