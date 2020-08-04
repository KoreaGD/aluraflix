import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink'

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="Logo da AluraFlix" />
      </Link>
      <Button name="nv" as={Link} to="/cadastro/video">Novo Vídeo</Button>
    </nav>
  );
}
