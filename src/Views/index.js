import React from 'react'
import styled from 'styled-components'
import Nov from '../Images/nov.jpg'
import Inicio from './inicio';


import {Route, Switch} from 'react-router-dom'
import Notice from '../Pages/Notice';

export default function index() {
    return (
        <>
        <DivHome>
        <Switch>
            <Route exact path="/" component={Inicio}/>
            <Route exact path="/Noticias" component={Notice}/>
        </Switch>
        </DivHome>
        
        
        </>
        
    )
}

const DivHome = styled.div`
margin:0;
padding: 0;
font-family: 'Poppins', sans-serif;
width: 100%;
height: 769px;
background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.65), #343a40), url(${Nov});
background-size: cover;
`

