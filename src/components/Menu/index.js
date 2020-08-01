import React from 'react'
import './Menu.css'
import Logo from '../../assets/img/Logo.png'
import Button from '../Button'
// import ButtonLink from './components/ButtonLink'


export default function () {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="Logo da AluraFlix"/>
            </a>
            <Button as="a" href="/">Novo Vídeo</Button>
        </nav>
    )
}