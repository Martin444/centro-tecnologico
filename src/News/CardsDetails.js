import React from 'react'
import styled from 'styled-components'
import Nov from '../Images/nov.jpg'

export default function CardsDetails() {
    return (
        <DivDetails>
            <img src={Nov} alt="Imagen de la noticia"/>
            <div className="category">
                <span>Categoria</span>
            </div>
            <h3>Titulo o información relevante del blog</h3>
        </DivDetails>
    )
}

const DivDetails = styled.div`
    width: 290px;
    height: 190px;
    display: block;
    text-align:left;
    margin-right: 20px;
    cursor:pointer;

    img{
        margin-right: 20px;
        width: 290px;
        height: 190px;
        border-radius: 10px;
    }

    h3{
        padding-top: 10px;
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.2px;
        color: #ffffff;
        text-align: left;
    }

    .category{
        width: 103px;
        height: 24px;
        border-radius: 10px;
        background-color: #343a40;
        position: relative;
        bottom: 40px;
        left: 10px;
    }

    .category span {
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.12px;
        color: #ffffff;
    }
`