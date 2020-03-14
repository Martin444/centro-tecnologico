import React from 'react'
import styled from 'styled-components'
import Perfil from '../../Images/perf.jpg'

export default function Header() {
    return (
        <Container>
            <div className="users">
                <img src={Perfil} alt="Fotos de los usuarios en el chat"/>
                <img src={Perfil} alt="Fotos de los usuarios en el chat"/>
                <img src={Perfil} alt="Fotos de los usuarios en el chat"/>
            </div>
            <div className="state">
                <span><i class="fas fa-circle"></i>Online</span>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin: auto;
     display: flex;
    width:100%;

    .users{
        display:flex;
    }
     img{
        width: 20px;
        height: 20px;
        border-radius:50px;
        margin-right:4px;
     }

     .state{
         display: block;
         text-align:end;
         padding-left:50%;
     }

     span{
         display: flex;
     }

     span i{
        font-size:10px;
        border-radius: 50px;
        color: #3cd458;
        margin-right: 5px;
        margin-top: 5px;
    }

`