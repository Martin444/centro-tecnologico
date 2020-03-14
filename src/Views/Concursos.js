import React from 'react'
import styled from 'styled-components'
import Carusel from '../Competition/Carusel';

export default function Concursos() {
    return (
        <DivChallenge>
            <div className="concursos">
                <h4>Concursos</h4>
                <h5>Participá y ganá increibles premios</h5>
            </div>
            <Carusel/>
        </DivChallenge>
    )
}

const DivChallenge = styled.div`
    margin:auto;
    padding:0;
    width:100%;
    height: 100%;
    background: #343a40;

    .concursos{
        width: 1024px;
        padding-top: 140px;
        display: inline-flex;
        text-align: left;
        color: #fff;
    }

    span {
        margin:0;
        padding:0;
        text-align:left;
    }

    h5{
        padding-top: 30px;
        position:absolute;
        font-family: Poppins;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.18px;
        color: #757575;
    }
`