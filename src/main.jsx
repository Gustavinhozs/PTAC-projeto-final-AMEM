import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './home/Home';
import destaque from './destaque/destaque';
import cadastrar from './cadastrar/cadastrar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/destaque' element={<destaque />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cadastrar' element={<cadastrar/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)