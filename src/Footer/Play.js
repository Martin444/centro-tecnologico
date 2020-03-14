import React from 'react'
import styled from 'styled-components'
import {ProgressBar} from 'react-bootstrap'
import Nov from '../Images/nov.jpg'
import Controler from './Controler';

export default function Play() {
    return (
        <Container>
            <div className="contenedor">
                <div className="progreso">
                    <span>25:53</span>
                    <ProgressBar variant="success" now={60} className="status"/>
                    <span>33:12</span>
                </div>
                <div className="controler">
                   <button type="button" className="stream"><i class="fas fa-circle"></i>Play Live</button>
                   <p>El valle de los tercos</p>
                   <img src={Nov} className="Track-img" alt="imagen de la cancion reproducida"/>
                   <p>Track ID</p>
                   <Controler/>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin:0;
    padding:20px;

    .contenedor{
        width: 1024px;
        margin:auto;
        padding:auto;
    }

    p{
        margin-left:35px;
    }
    .progreso{
        margin:auto;
        padding:auto;
        display: flex;
        padding-bottom:10px;
        top: 40px;
    }

    .controler{
        margin:auto;
        padding:auto;
        display: flex;
    }

    .status{
        width: 1166px;
        height: 5px;
        margin:10px;
        border-radius: 100px;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .stream{
        margin: 0;
        padding: 0;
        display:disabled;
        width: 101px;
        height: 28px;
        border-radius: 60px;
        margin-right: 20px;
        border: none;
        box-shadow: 0 0 30px 0 rgba(255, 255, 255, 0.2);
        background-color: #ffffff;
        color: #ff3e3e;
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        cursor: normal;
    }

    .Track-img{
        width: 54px;
        height: 54px;
        padding: 0;
        position:relative;
        left: 5px;
        bottom: 14px;
        border-radius: 100px;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
    }

`