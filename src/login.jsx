import React from 'react';
import './style.css';

export default function Home() {
  return (
    <>
      <h1>PxTube</h1>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Destaque</a></li>
            <li><a href="#">Cadastre-se</a></li>
          </ul>
        </div>
        <div className="main-content">

        </div>
      </div>
    </>
  );
}