import React from 'react'
import BannerMain from '../BannerMain'
import Carousel from '../Carousel'
import data from '../../data/dados_iniciais.json'
import { Main } from './styles'


export default function () {
    return (
        <Main>
            <BannerMain url='https://www.youtube.com/watch?v=UOK7nS2E9xM' videoTitle="Teste" videoDescription="Texte" />
            {
                data['categorias'].map(
                    categoria =>
                        <Carousel  category={categoria} />
                )
            }
        </Main>
    )
}