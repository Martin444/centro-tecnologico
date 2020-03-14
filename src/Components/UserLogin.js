import React from 'react'

import Perfil from '../Images/perf.jpg'

import { ProgressBar, Dropdown } from 'react-bootstrap'
import styled from 'styled-components'

export default function UserLogin() {
    return (
        <Container>
            <div className="levels">
                    <h6>Nivel 100</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    <p>+2.000 Exp</p>
            </div>
                <img className="user-perfil" src={Perfil} alt="Perfil del usuario"/>
            <div className="perfil-data">
                <h6>Nombre</h6>

                <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" style={{width:'100px', background:'none', color:'#3cd458', padding:'0', margin:'0'}}>
                    opciones
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    margin:auto;

    .levels{
        margin: auto;
        margin-left: 10px;
    }

    .perfil-data{
        margin: 0;
        display:initial;
    }

    .perfil-data h6{
        position:relative;
        top: 10px;
        right: 13px;
    }

    .op{
        color: rgba(0, 0, 0, 0.3);
        background:none;
    }

    .user-perfil{
        border-radius: 100px;
        width: 48px;
        height: 48px;
        margin-left: 10px;
    }

     h6{
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.12px;
        color: #ffffff;
    }

    .levels p{
        font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.12px;
  color: #ffffff;
    }

    .progressBar{
        width: 80px;
    margin-top: 40px;
    margin:auto;
    padding:0;    
    background-color:rgba(0, 0, 0, 0.3);
    height:4px;
  }
`