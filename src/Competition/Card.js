import React from 'react'
import styled from 'styled-components'
import Nov from '../Images/nov.jpg'
import Buttons from './Buttons';



export default function Card() {
    return ( 
    <DivCard>
        <div className="contenedor">
            <div className="header">
                <img src={Nov} alt="imagen del concurso"/>
                <div className="date">
                    <h3>Finaliza en</h3>
                    <span>10 Días 23 Horas 10 Minutos</span>
                </div>
                <Buttons/>
            </div>
            <div className="info">
                <h1>¡Gana 3 entradas al concierto de Fulanos!</h1>
                <p>isndaoid aoinsdaoid oniasdoaid oaninsdoaid oansdoaid aoindoaisd oindoaind oinsdoaidn oainsdoiasd oiansdoad oinasdoaind oinsdoain</p>
            </div>
        </div>
    
        </DivCard>
        
    )
}

const DivCard = styled.div`
    /* width: 24px; */
    padding: 50px;
    margin-right: 10px;
    display:block;
    
    .contenedor{
        height: 100%;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, .65);
        padding:40px;

    }

    .header{
        display: flex;
        color:#fff;
    }

    .date span {
        position: relative;
        right: 80px;
        text-align:left;
    }


    .date h3{
        text-align:left;
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.16px;
        color: #ffffff;
    }

    .info h1{
        text-align: left;
        color:#fff;
        font-size: 28px;
        font-weight:bold;
    }

    p{
        text-align: left;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.18px;
        color: #757575;
    }

    img{
        width: 60px;
        height: 50px;
        margin: 20px;
    }
`