import React from 'react'
import styled from 'styled-components'
import Perfil from '../../Images/perf.jpg'

export default function Avatar() {
    return (
        <Container>
                <i class="fas fa-circle"></i>
                <img src={Perfil} alt="Foto de perfil del usuario"/>
            
        </Container>
    )
}

const Container = styled.div`
    margin:0;
    padding:0;
    display: inline-flex;
    img{
        width: 36px;
        height: 36px;
        border-radius:50px;
    }

    i{
        font-size:10px;
        border-radius: 50px;
        color: #3cd458;
        position:relative;
        top:29px;
        left: 36px;
    }

    p{
        width: 10px;
        height: 6px;
        opacity: 2;
    }
`