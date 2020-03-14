import React from 'react'
import styled from 'styled-components'

export default function Input() {
    return (
        <Container>
            <input type="text" />
            <div className="btns">
                <button className="donate"><i class="fas fa-dollar-sign"></i></button>
                <button className="send"><i class="fas fa-paper-plane"></i></button>
            </div>
            
        </Container>
    )
}

const Container = styled.div`
    margin:0;
    padding: 0;
    display:flex;
    input{
        margin:auto;
        padding-left:6px;
        position:absolute;
        width: 260px;
        height: 36px;
        border-radius: 50px;
        background-color: #ffffff;
        text-align:left;

        /* Prefijos de MOZ */
        margin:auto;
        padding-left:-moz- 6px;
        position:-moz- absolute;
        width: 260px;
        height: 36px;
        border-radius:-moz-  50px;
        background-color:-moz-  #ffffff;
        text-align:-moz- left;

    }

    .btns{
        display:flex;
        color:#ffffff;
        left:210px;
        position:relative;
    }

    .donate{
        border: none;
        background: none;
        color: #757575;
        font-size: 14px;
    }

    .send{
        width: 36px;
        height: 36px;
        background-color: #3cd458;
        border: none;
        border-radius:  50px;
        color: #ffffff;

    }
`