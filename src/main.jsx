import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cabecalho from './pages/home/Cabecalho/Cabecalho.jsx'
import Portifolio from './pages/home/Portifolio/Portifolio.jsx'
import Index from './index.jsx'
import Projetos from './pages/projetos/Projetos.jsx'
import Sobre from './pages/sobre/Sobre.jsx'
import Contato from './pages/contato/Contato.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<Sobre />} />    
        <Route path="/contato" element={<Contato />} />    
      </ Routes>
    </BrowserRouter>
  </React.StrictMode>
)
