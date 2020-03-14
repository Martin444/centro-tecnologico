import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar';

export default function NewMessage() {
    return (
        <Message>
            <div className="container">
                <div className="avatar">
                    <Avatar/>
                </div>
                    <h4>Nombre</h4>
                    <p>Este es un mensajedasdna isdnaodin saodinas doindsandad inasio adsnoad ainsdoai oaidnaodi  </p>
            </div>
        </Message>
    )
}

const Message = styled.div`
   text-align: right;
   position: absolute;
    .container{
        width:30%;
        text-align: left;
    }
    
    .avatar{
        left: 3px;
        position: absolute;
        padding-top: 20px;
    }

    h4{
        color:#fff;
        position: absolute;
        top: 20px;
        left: 58px;
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.24px;
        color: #ffffff;
    }
    
    p{
        width: 80%;
        position: absolute;
        text-align: left;
        top: 45px;
        left: 58px;
        color:#fff;
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.12px;
        color: #ffffff;
    }
`