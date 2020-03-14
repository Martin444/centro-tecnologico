import React from 'react'
import styled from 'styled-components'
import Perfil from '../Images/perf.jpg'

export default function onLive() {
    return (
        <OnLive>
            <div className="streaming">
            <button type="button" className="stream"><i class="fas fa-circle"></i>On Live</button>
            </div>
            <div className="locutores">
                <h4>Locutores</h4>
                <img src={Perfil} alt="Nombre del locutor"/>
                <img src={Perfil} alt="Nombre del locutor"/>
            </div>
            <div className="descargas">
                <h4>Descarga la app</h4>
                <button className="btn-primary"><i class="fab fa-apple" style={{fontSize:'14px', marginRight:'5px', marginTop:'4px'}}></i>App Store</button>
                <button className="btn-primary"><i class="fab fa-google-play" style={{fontSize:'14px', marginRight:'5px',marginTop:'4px' }}></i>Play Store</button>
            </div>
        </OnLive>
    )
}

const OnLive = styled.div`
    margin: auto;
    padding: auto;
    font-family: 'Poppins', sans-serif;

     .stream {
        margin: auto;
        padding: 0;
        display:disabled;
        width: 108px;
        height: 36px;
        border-radius: 10px;
        margin-right: 20px;
        border: none;
        box-shadow: 0 0 30px 0 rgba(255, 255, 255, 0.2);
        background-color: #ffffff;
        color: #ff3e3e;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        cursor: normal;
    }

    .stream i{
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }

    .streaming{
        margin:auto;
        padding: auto;
        margin-left: 20px;
    }

    && .locutores{
        margin-top:40px;
        padding:0;
    }

    && .btn-primary{
        width: 134px;
        height: 36px;
        margin:auto;
        padding-left:19px;
        border: none;
        border-radius: 50px;
        background-color: #3cd458;
        display:flex;
        margin-bottom: 10px;
        font-family: Poppins;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.14px;
        color: #ffffff;
        cursor: pointer;
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
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.14px;
        color: #ffffff;
        color: #ffffff;
    }

    && span{
        margin: 0;
        padding:0;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 0.16px;
        color: #ff3e3e;
    }
`
