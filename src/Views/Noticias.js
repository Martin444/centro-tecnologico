import React from 'react'
import styled from 'styled-components'
import Ads from '../Components/Ads';
import Cards from '../News/Cards';

import {Link} from 'react-router-dom'

export default function Noticias() {
    return (
        <DivNews>
            <div>
                <Ads/>
            </div>
            
            <div className="news">
                <h4>Blog</h4>
                <h5>Noticias, tutoriales, guias y más en nuestro blog.</h5>
            </div>
            <Link to={'/Noticias'}>
                <Cards/>
            </Link>
        </DivNews>
    )
}

const DivNews = styled.div`
    margin:auto;
    padding:0;
    width:100%;
    height: 739px;
    background: #343a40;

    .news{
        margin: auto;
        width: 1024px;
        padding-top: 50px;
        display: flex;
        text-align: left;
        color: #fff;
    }

    h5{
        padding-top: 30px;
        position:absolute;
        font-family: Poppins;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.18px;
        color: #757575;
    }
`