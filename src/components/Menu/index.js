import React from 'react'
import './Menu.css'
import Logo from '../../assets/img/Logo.png'
import Button from '../Button'
// import ButtonLink from './components/ButtonLink'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="Logo da AluraFlix"/>
            </Link>
            <Button as={Link} to="/cadastro/video">Novo Vídeo</Button>
        </nav>
    )
}