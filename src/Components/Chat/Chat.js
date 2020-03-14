import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Sesion from './Sesión';
import Input from './Input';
import Reacts from './Reacts';

export default function Chat() {
    return (
        <Container>
            <Header/>
            <Sesion/>
            <Reacts/>
            <Input/>
        </Container>
    )
}

const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 260px;
  height: 36px;
    color:#fff;
    text-align: left;

`