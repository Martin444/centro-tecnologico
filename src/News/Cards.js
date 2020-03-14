import React from 'react'
import CardsDetails from './CardsDetails';
import styled from 'styled-components'

export default function Cards() {
    return (
        <DivCard>
            <CardsDetails/>
            <CardsDetails/>
            {/* <CardsDetails/>
            <CardsDetails/> */}
        </DivCard>
    )
}

const DivCard = styled.div`
    margin:0;
    padding:0;
    width: 1024px;
    padding-top: 50px;
    display: inline-flex;
    text-align: left;
    color: #fff;

`
