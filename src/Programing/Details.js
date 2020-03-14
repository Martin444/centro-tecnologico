import React from 'react'
import styled from 'styled-components'

import Perfil from '../Images/perf.jpg'

import Nov from '../Images/nov.jpg'
import Podcast from './Podcast';

export default function Details() {
    return (
        <Container>
            <Banner>
                <div className="Contenedor">
                    <div className="Locutores">
                    <p>Profesores</p>
                        <img src={Perfil} alt="Nombre del locutor"/>
                        <img src={Perfil} alt="Nombre del locutor"/>
                    </div>
                    <div className="Info">
                        <h1>Curso presencial de escritura para internet</h1>
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                        <div className="program-date">
                            <h4>Próxima emisión: </h4>
                            <p>En 12 Dias</p>
                            
                        </div>
                        <div className="transmition-date">
                            <h4>Días de clase:</h4>
                            <p>Lunes de 12:30hs a 13:30hs
                                Martes de 12:30hs a 15:00hs
                                Miercoles de 12:30hs a 15:00hs
                                Jueves de 12:30hs a 15:00hs
                                Viernes de 12:30hs a 15:00hs
                                Sábado de 12:30hs a 15:00hs
                                Domingo de 12:30hs a 15:00hs</p>
                        </div>
                        
                    </div>
                    <div className="btns">
                        <button className="btn-share"><i class="far fa-heart" style={{ marginRight:'5px', marginTop:'4px'}}></i>Favorito</button>
                        <button className="btn-share"><i class="fas fa-share" style={{ marginRight:'5px', marginTop:'4px'}}></i>Compartir</button>
                    </div>
                </div>
                <Podcast/>
            </Banner>
        </Container>
    )
}

const Container = styled.div`
    margin: auto;
    padding: auto;
    /* height: 100%; */
    background: #343a40;
    color: #fff;
    
    .Contenedor{
        padding-top: 80px;
        width: 1024px;
        margin: auto;
        padding: auto;
        display: flex;
    }

    .Locutores{
        margin:0;
        padding-right: 40px;
    }

    .Info{
        margin:0;
        padding:0;
    }

    .btns{
        margin:auto;
        padding: 20px;
        display: flex;
    }

    .program-date{
        display: flex;
        padding-top: 40px;
    }

    .transmition-date{
        display: flex;
    }

    .transmition-date p{
        width: 400px;
    }

    && img {

            margin: auto;
            margin-bottom: 20px;
            display: flex;
            width: 48px;
            height: 48px;
            border-radius: 50px;
            }

            && h4{
                margin:0;
                margin-right: 5px;
                text-align: left;
                font-size: 16px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.16px;
                color: #ffffff;
            }

            .btn-share{
                width: 114px;
                height: 28px;
                background: none;
                border-radius: 50px;
                border: solid 1px #ffffff;
                color: #fff;
                font-size: 12px;
                margin-right: 10px;
                margin-top:110px;
            }

            h1{
                text-align:left;
                margin:0;
                font-size: 36px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.36px;
                color: #ffffff;
            }

            p{
                text-align:left;
                margin:0;
                font-size: 16px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.16px;
                color: #ffffff;
            }
`

const Banner = styled.div`
    width: 100%;
    height: 100%;
    background: #343a40;
    background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.5), rgba(52, 58, 64, 2), #2f343a), url(${Nov});
    background-size: cover;
`