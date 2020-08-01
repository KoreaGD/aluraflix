import React from 'react'
import BannerMain from '../BannerMain'
import Carousel from '../Carousel'
import data from '../../data/dados_iniciais.json'
import Footer from '../Footer'
import { url, videoTitle, videoDescription } from '../../data/bannerMain.json'
import { Main } from './styles'


export default function () {
    return (
        <Main>
            <BannerMain url={url} videoTitle={videoTitle} videoDescription={videoDescription} />
            {
                data['categorias'].map(
                    categoria =>
                        <Carousel category={categoria} />
                )
            }

            <Footer />
        </Main>
    )
}