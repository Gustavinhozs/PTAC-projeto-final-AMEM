import React from 'react';
import './destaque.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>PxTube</h1>
      <div className="container">
        <div className="sidebar">
      <Link to = "/">Home</Link><br></br>
      <Link to = "/destaque">Destaque</Link><br></br>
      <Link to = "/cadastrar">Cadastrar vídeo</Link>
        </div>
        <div className="main-content">  

        </div>
      </div>
    </>
  );
}