import React from 'react'
import ReactDOM from 'react-dom/client'
import Cabecalho from './Cabecalho/Cabecalho.jsx'
import Portifolio from './Portifolio/Portifolio.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabecalho/>
    <Portifolio/>
  </React.StrictMode>,
)
