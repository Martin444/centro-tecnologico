import React from 'react'
import styled from 'styled-components'
import OnLive from '../Components/onLive';
import DescriptionLive from '../Components/DescriptionLive';
import Chat from '../Components/Chat/Chat';
import Programacion from './Programación';
import Concursos from './Concursos';
import Noticias from './Noticias';


export default function inicio() {
    return (
        <WrapperHome>
            <div className="container">
                <div className="content">
                    <div className="sesionLive">
                            
                    </div>
                    <div className="description">
                        <DescriptionLive/>
                    </div>
                </div>
            </div>
            <Programacion/>
            <Concursos/>
            <Noticias/>
        </WrapperHome>
    )
}

const WrapperHome = styled.div`
margin:auto;
    padding:auto;
    width:100%;
    height: 769px;
    padding-top: 120px;
display:block;
&& .container {
    width: 100%;
    /* grid-template-columns: minmax(auto, 1024px); */
  display: grid;
  margin: auto;
  padding:auto;
  /* justify-content: space-between; */
}
&& .content{
    margin:0;
    padding: 0;
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