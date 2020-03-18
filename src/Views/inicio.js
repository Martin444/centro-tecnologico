/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import styled from 'styled-components'
import DescriptionLive from '../Components/DescriptionLive';
import Programacion from './Programación';
import Concursos from './Concursos';
import Noticias from './Noticias';
import {Animated} from "react-animated-css";


export default function inicio() {
    return (
        <WrapperHome>
            <div className="container">
                <div className="content">
                    <div className="sesionLive">
                        <DescriptionLive/>
                    </div>
                    <div className="description">
                    <Animated animationIn="zoomIn" animationOut="flipOutX" animationInDuration={400} animationOutDuration={400} isVisible={true}>

                        <iframe src="https://drive.google.com/file/d/1IXpb-5Yh9IY0ATez5mIBiVW1zyo6Avxh/preview" width="640" height="380"></iframe>
                    </Animated>
                    </div>
                </div>
            </div>
            <Animated  animationIn="zoomIn" animationOut="flipOutX" animationInDuration={400} animationOutDuration={400} isVisible={true}>
            <Programacion/>
            <Concursos/>
            <Noticias/>
            </Animated>
        </WrapperHome>
    )
}

const WrapperHome = styled.div`
margin:0;
    padding:auto;
    width:100%;
    height: 769px;
    padding-top:140px;
display:block;
&& .container {
    width: 100%;
    height: 2800;
  display: grid;
  margin: auto;
  /* padding:auto; */
  /* justify-content: space-between; */
}
&& .content{
    margin:0;
    padding: 23px;
    display: flex;
  /* justify-content: space-between; */
}

&& h1 {
    margin: auto;
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.36px;
    color: #ffffff;
}

.sesionLive{
    margin: 0;
    padding:0;
    /* position:relative;
    right: 20px; */
}

.description{
    margin:auto;
    padding:0;

}

.Chat{
    margin:0;
    padding:0;

}

`