import React from 'react'
import styled from 'styled-components'
import Banner from '../Images/nov.jpg'


export default function Ads() {
    return (
        <Publish>
            <span>Publicidad</span>
            <div className="Banner">
                <h1>Titulo de la publi</h1>
                <h3>Subtitulo</h3>
            </div>
        </Publish>
    )
}

const Publish = styled.div`
    width: 1024;
    margin: 0;
    padding:0;
    text-align: left;
    display: inline-block;
    .Banner{
        margin: auto;
        padding: 20px;
        width: 1024px;
        height: 120px;
        border-radius: 5px;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
        background-image: linear-gradient(to bottom, rgba(123, 101, 255, 0.33), rgba(123, 101, 255, 0.11)), url(${Banner});
        background-size: cover;
    }

    span{
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.16px;
        color: #ffffff;
    }

    h1{
        font-size: 28px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.28px;
        color: #ffffff;
    }

    h3{
        font-size: 24px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.24px;
        color: #ffffff;
    }
`