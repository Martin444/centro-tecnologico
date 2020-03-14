import React from 'react'
import styled from 'styled-components'

export default function Buttons() {
    return (
        <DivBtns>
            <button className="btn-primary">Participar</button>
            <button className="btn-secundary">Compartir</button>
        </DivBtns>
    )
}

const DivBtns = styled.div`
    display: flex;
    margin: auto;
    padding: 0;
    && .btn-primary {
        width: 134px;
        height: 32px;
        border: none;
        margin-right: 9px;
        border-radius: 50px;
        background-color: #3cd458;
        font-family: Poppins;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.14px;
        color: #ffffff;
        cursor: pointer;
    }
    && .btn-secundary {
        width: 134px;
        height: 36px;
        border-radius: 40px;
        border: solid 1px #ffffff;
        background:none;
        font-family: Poppins;
        font-size: 14px;
        font-weight: bold;
        line-height: 1.4;
        letter-spacing: 0.14px;
        color: #ffffff;
        cursor:pointer;
    }
`