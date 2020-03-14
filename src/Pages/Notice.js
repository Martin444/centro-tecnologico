import React from 'react'

// Dependencias
import {Link} from 'react-router-dom'
import styled from 'styled-components'

// Imagen 
import Perfil from '../Images/perf.jpg'
import Nov from '../Images/nov.jpg'

// Components
import Cards from '../News/Cards';


export default function Notice() {
    return (
        <Container>
            <div className="contenedor">
                <Link to="/">
                <button className="Back-btn"><i class="fas fa-chevron-left"></i>Volver al inicio</button>
                </Link>
                
                <Banner>
                    <div className="title">
                        <h1 className="name">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</h1>
                    </div>

                    <div className="Perfil-pub">
                        <img src={Perfil} alt="Perfil del publicador"/>
                        <h4>Joe Dud</h4>
                        <p>CEO & Founder at RadioStudio</p>
                    </div>
                    <p className="date">03 de Agosto de 2019</p>
                </Banner>
            </div>
                <Articulo >
                    <div className="article">
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                        <h1>Titulo de la noticia</h1>
                        <h3>Subtitulo de la noticia</h3>
                        <input className="etiqueta" type="button" value="Música"/>
                        <input className="etiqueta" type="button" value="último Momento"/>
                        <input className="etiqueta" type="button" value="Lo más sonado"/>
                        <div className="share-btns">
                            <h5>Compartelo en</h5>
                            <button className="facebook"><i class="fab fa-facebook-f"></i></button>
                            <button className="twitter"><i class="fab fa-twitter"></i></button>
                            <button className="whatsapp"><i class="fab fa-whatsapp"></i></button>
                            <button className="messenger"><i class="fab fa-facebook-messenger"></i></button>
                        </div>
                    </div>

                    
                </Articulo>
                <div className="relations">
                    <h5>Relacionados</h5>
                    <Cards/>
                </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-top:130px;
    display: block;
    background-color:#343a40;
    .contenedor{
        display:inline-block;
        width:1024px;
        margin:auto;
        padding:auto;
        text-align: left;
    }

    .Back-btn{
        margin:0;
        padding:0;
        color:#fff;
        border:none;
        background:none;
        font-size: 18px;
        font-weight: bold;
        font-style: normal;
    }

    .relations{
        margin:auto;
        width:1024px;
        height: 544px;
        background-color:#343a40;
    }

    .relations h5{
        margin:0;
        text-align:left;
        font-size: 24px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.24px;
        color: #ffffff;
    }
`

const Banner = styled.div`
    width: 1024px;
    height: 400px;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.65), rgba(52, 58, 64, 0.98)), url(${Nov});
    background-size: cover;
    position: relative;
    padding:20px;

    .title {
        margin: 0;
        display:block;
        text-align: left;
    }

    .name{
        margin:0;
        text-align: left;
    }

    h1{
        font-size: 40px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.4px;
        color: #ffffff;
    }

    h4{
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.16px;
        color: #ffffff;
    }

    p{
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.14px;
        color: #ffffff;
    }

    .Perfil-pub p{
        position:absolute;
        bottom:10px;
        left:88px;
    }

    .date{
        position:absolute;
        bottom:10px;
        right:88px;
    }

    .Perfil-pub h4{
        position:absolute;
        bottom:40px;
        left:88px;
    }

    .Perfil-pub img{
        margin:10px;
        padding:0;
        width: 64px;
        height: 64px;
        border-radius: 100px;
        position:absolute;
        bottom:10px;
        left:5px;
    }
`

const Articulo = styled.div`
    margin:0;
    padding-top:100px;
    width:100%;
    height: 696px;
    background-color: #343a40;

    .article{

        position: relative;
    }
    
    .article p{
        width:1024px;
        margin:auto;
        text-align:left;
    }

    .article h1{
        padding-top: 30px;
        width:1024px;
        margin:auto;
        text-align:left;
    }

    .article h3{
        width:1024px;
        margin:auto;
        text-align:left;
    }

    .etiqueta input{
        margin:0;
        display:flex;
        text-align:left;
        
    }

    .etiqueta{
        position: relative;
        right: 330px;
        width: wrap;
        height: 32px;
        margin:0;
        padding:auto;
        border:none;
        color: #fff;
        margin-right: 20px;
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 0.2);
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.6;
        letter-spacing: 0.14px;
        color: #ffffff;
    }

    p{
        font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 0.22px;
  color: #ffffff;
    }

    h1{
        font-size: 40px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.4px;
        color: #ffffff;
    }

    h3{
        font-size: 32px;
  font-weight: bold;
  line-height: 1.6;
  color:#ffffff;
    }

    .share-btns{
        margin-left: 20%;
        width:224px;
        position:absolute;
        top: 390px;
        left: 800px;
    }

   .share-btns h5{
        font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 0.18px;
  color: #ffffff;
    }

    button{
        width: 42px;
        height: 42px;
        border:none;
        color:#fff;
        margin-left: 10px;
        border-radius: 100px;
    }

    .facebook{
        background-color: #3b5999;
    }

    .messenger{
        background-color: #0084ff;
    }

    .whatsapp{
        background-color: #25d366;
    }

    .twitter{
        background-color: #55acee;
    }
`