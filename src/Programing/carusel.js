import React from 'react'
import Card from './Card';
import styled from 'styled-components'

import Slider from "react-slick";
import Details from './Details';

export default function carusel() {

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        focusOnSelect: true,
      };
    return (
        <div className="contain">
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
                    <Card/>
                    <Card/>
                    <Card/>

            </Slider>
                </DivCarusel>

        <div>
                <Details/> 
        </div>


        </div>
        
        
    )
}


const DivCarusel = styled.div`
    width: 1024px;
    margin: auto;
    padding:0;
    padding-top: 40px;
    display: flex;

    div{
        width: 100%;
    }
`