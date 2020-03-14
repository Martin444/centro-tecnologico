import React from 'react'
import Like from '../../Images/reacciones/me_gusta.png'
import MD from '../../Images/reacciones/me_divierte.png'
import ME from '../../Images/reacciones/me_encanta.png'
import MU from '../../Images/reacciones/me_enoja.png'
import MS from '../../Images/reacciones/me_entristece.png'
import MA from '../../Images/reacciones/me_asombra.png'
import MB from '../../Images/reacciones/me_aburre.png'

import styled from 'styled-components'



export default function Reacts() {
    return (
        <Container>
            <button><img src={Like} alt="Reaciones"/></button>
            <button><img src={ME} alt="Reaciones"/></button>
            <button><img src={MD} alt="Reaciones"/></button>
            <button><img src={MB} alt="Reaciones"/></button>
            <button><img src={MA} alt="Reaciones"/></button>
            <button><img src={MU} alt="Reaciones"/></button>
            <button><img src={MS} alt="Reaciones"/></button>
            
            
            
            
            
            
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height: 35px;
 margin:0;
 padding:5px;
 position:relative;
 display: flex; 

    button{
        width: 32px;
        height: 32px;
        margin-right:5px;
        margin-bottom: 28px;
        background:none;
        border:none;
    }

    img{
        width: 32px;
        height: 32px;
        bottom: 10px;
        position: relative;
        :hover{
            bottom:13px;
            box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
        }
    }
`