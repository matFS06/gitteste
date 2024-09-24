// src/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Se você tiver um CSS para o Header

// Definir o tipo para as props, se houver, por enquanto deixaremos vazio
// interface HeaderProps {}

// Componente funcional tipado
const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>ReclameAcao</h1>
      <nav>
        <ul>
          <li><Link to="/">VOLTAR</Link></li>
          <li><Link to="/complaints">Reclamações</Link></li>
          <li><Link to="/Perfil">Perfil</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;