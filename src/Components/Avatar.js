import React from 'react'
import styled from 'styled-components'
import Perfil from '../Images/perf.jpg'

export default function Avatar() {
    return (
        <DivAvatar>
            <img src={Perfil} alt="Nombre del usuario"/>
        </DivAvatar>
    )
}

const DivAvatar = styled.div`
position: absolute;

    && img{
        width: 36px;
        height: 36px;
        margin-right:15px;
    }
`