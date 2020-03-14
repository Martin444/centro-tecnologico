import React from 'react'
import styled from 'styled-components'
import Play from '../Footer/Play';

export default function Footer() {
    return (
        <PlayFooter>
            <Play/>
        </PlayFooter>
    )
}

const PlayFooter = styled.footer`
    margin: 0;
    padding:0;
    width: 100%;
    height: 100px;
    background: #343a40;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.4);
    position: fixed;
    bottom: 0%;
    color: #fff;
    z-index:20000;
`