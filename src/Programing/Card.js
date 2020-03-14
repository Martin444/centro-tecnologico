import React from 'react'
import styled from 'styled-components'
import Nov from '../Images/nov.jpg'

export default function Card() {
    return (
        <DivCard>
            <div className="conten">
                <ImgBox>
                    <h4>Soy un Curso xd</h4>
                </ImgBox>
            </div>
        </DivCard>
    )
}

const DivCard = styled.div`
    /* width: 210px; */
    height: 210px;
    padding: 20px;
    color: #fff;
    
    .content{
        border-radius: 15px;
        cursor:pointer;
        margin-right: 20px;
        background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.35), #343a40), url(${Nov});
        box-shadow: 0px 0px 30px 0 rgba(0, 0, 0, .65);

    }

    
    .content:hover{
        transition: ease-in .1s all;
        background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.35), #343a40), url(${Nov});
        box-shadow: 0px 0px 30px 0 rgba(0, 0, 0, .65);
        h1{
            display:flex;
        }
    }
`

const ImgBox = styled.div`
    margin:auto;
    padding:auto;
    width: 200px;
  height: 180px;
  border-radius: 10px;
  background-image:url(${Nov});
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);

  h4{
        margin:auto;
        padding:auto;
        padding-top: 50px;
        padding-left: 19px;
        font-size: 18px;
        font-weight: bold;
        display:none;
    }

  :hover{
      background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.2), #343a40),url(${Nov});
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);

      h4{
          display: flex;
      }
  }

`