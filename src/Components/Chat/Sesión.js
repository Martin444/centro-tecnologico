import React from 'react'
import Message from './Message';
import styled from 'styled-components'

export default function Sesión() {
    return (
        <Container>
            <Message/>
        </Container>
    )
}

const Container = styled.div`
    margin: 0;
    padding: 0;
    height: 300px;
`
