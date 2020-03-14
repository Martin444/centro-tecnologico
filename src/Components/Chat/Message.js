import React from 'react'
import Avatar from './Avatar';
import styled from 'styled-components'

export default function Message() {
    return (
        <Container>
            <Avatar/>
            <div className="text">
                <h4 className="name-user">Hola</h4>
                <p className="message">Que tal asndaodi aoindsoaid oinasdoiasd oinadoians ioansdoiand oinasdoaid oinaodnas oinasdn nodnaoi</p>
            </div>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin: 0;
    padding: auto;
    align-self: left;
    justify-content: left;
    text-align: left;
    display: flex;
    margin-top: 15px;

    .text{
        margin:0;
        padding:0;
        margin-left: 5px;
        display: block;
        text-align: left;
    }

    .name-user{
        margin: 0;
        text-align: left;
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.24px;
        color: #ffffff;
    }

    .message{
        font-size: 12px;
        text-align: left;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.12px;
        color: #ffffff;
    }
`
