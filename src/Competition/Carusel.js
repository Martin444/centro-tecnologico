import React from 'react'
import Card from './Card';
import styled from 'styled-components'

import Slider from "react-slick";



export default function Carusel() {

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed: 2000
      };

    return (
        <div className="Container">
            <DivCarusel>
              <Slider {...settings}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Slider>
            </DivCarusel>

        </div>
          
    )
}

const DivCarusel = styled.div`
    width: 1024px;
    margin: auto;
    padding:0;
    margin-bottom: 40px;
    padding-top:40px;
    display: inline-flex;
    /* align-self: left; */

    div{
        width: 100%;
    }
`