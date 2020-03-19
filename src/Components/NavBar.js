import React from 'react'
import styled from 'styled-components'
import NavButtons from './NavButtons';
import Logo from '../Images/maxlogo.png'

import {Animated} from "react-animated-css";


export default function NavBar() {
    return (
        <HeadNav>
        <Animated animationIn="pulse" animationOut="fadeOutDownBig" animationInDuration={400} animationOutDuration={400} isVisible={true}>
            <Container>
                <Content>

                    <DivLogo>
                        <img src={Logo} alt="Logo"/>
                        {/* <i class="fas fa-search"></i> */}
                    </DivLogo>
                    <div className="Nav">
                        <ul>
                            <li>Cursos</li>
                            <li>Blogs</li>
                        </ul>
                    {/* <div className="btn-container"> */}
                        <NavButtons/>
                    {/* </div> */}
                    </div>
                </Content>
            </Container>
    </Animated>
        </HeadNav>
    )
}

const HeadNav = styled.div`
width:100%;
  padding: 0;
  padding-top: 20px;
  margin: 0;
  justify-content: center;
  height: 90px;
  position: fixed;
  background: linear-gradient(to top, rgba(52, 58, 64, 0.2), #343a40);
  z-index: 1;
  && img{
      color: #fff;
      height: 60px;
      font-weight: 400;
  }
  && ul{
    margin: auto;
    padding: 0;
    color: #fff;
    border-right: solid 1px #fff;
  }
  && li {
    display: inline;
    margin-right: 5px;
    margin: 0 25px 0 0;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
  }

`

const Container = styled.div`
    grid-template-columns: minmax(auto, 1024px);
  display: grid;
  margin: 0;
  padding:0;
  align-content:center;
  align-items:center;
  align-self: center;
  justify-content: center;
`

const Content = styled.div`
    display: flex;
  justify-content: space-between;
  /* align-items: center; */

  && .Nav{
      margin: auto;
      margin-left: 630px;
      display: inline-flex;
      padding: 0;
      float:right;
      justify-content: right;
      align-self: right;
      align-content: right;
      align-items: right;
      
  }
`

const DivLogo = styled.div`
margin:auto;
    display: flex;
  justify-content: space-between;
  align-items: center;

    i{
        margin-left: 40px;
        margin-bottom: 4px;
        width: 16px;
        height: 16px;
        color: #fff;
        cursor: pointer;
    }
`