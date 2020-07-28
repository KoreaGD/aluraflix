import React from 'react'
import './Menu.css'
import Logo from '../../assets/img/Logo.png'

export default function () {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="Logo da AluraFlix"/>
            </a>
            <a href="/" className="ButtonLink">Novo Vídeo</a>
        </nav>
    )
}