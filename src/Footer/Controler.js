import React, { useState } from 'react'

// Dependencias
import styled from 'styled-components'
import {ButtonToolbar,  Popover, OverlayTrigger} from 'react-bootstrap'

// imagenes
import Like from '../Images/reacciones/me_gusta.png'
import MD from '../Images/reacciones/me_divierte.png'
import ME from '../Images/reacciones/me_encanta.png'
import MU from '../Images/reacciones/me_enoja.png'
import MS from '../Images/reacciones/me_entristece.png'
import MA from '../Images/reacciones/me_asombra.png'
import MB from '../Images/reacciones/me_aburre.png'



export default function Controler() {

    const [Play, setPlay] = useState(true)

    const onPlay = () => {
        setPlay(!Play)
    }


    return (
        <Conteiner>
            <button type="button" className="prev"><i class="fas fa-step-backward"></i></button>
            <button type="button" className="start" onClick={onPlay}>
                {
                    Play ?
                    <i className="fas fa-play"></i>
                    :
                    <i className="fas fa-pause"></i>
                }
                </button>
            <button type="button" className="prev"><i class="fas fa-step-forward"></i></button>
            <button type="button" className="rev"><i class="fas fa-redo-alt"></i></button>  

            <ButtonToolbar >
                    <OverlayTrigger
                    style={{background:'#2e373e'}}
                    trigger="click"
                    key='volumen'
                    placement='top'
                    overlay={
                        <Popover id={`popover-positioned-top`} style={{background:'#343a40'}}>
                        {/* <Popover.Title as="h3" style={{background:'#343a40'}}>{`Popover top`}</Popover.Title> */}
                        <Popover.Content style={{background:'#343a40', position:"relative", bottom:'50px'}}>
                            <input type="range" className="volume"/>
                        </Popover.Content>
                        </Popover>
                    }
                    >
                        <button className="vol"><i class="fas fa-volume-up"></i></button>
                    </OverlayTrigger>
            </ButtonToolbar>

                <img src={Like} alt="Reaciones"/>
                <img src={ME} alt="Reaciones"/>
                <img src={MD} alt="Reaciones"/>
                <img src={MB} alt="Reaciones"/>
                <img src={MA} alt="Reaciones"/>
                <img src={MU} alt="Reaciones"/>
                <img src={MS} alt="Reaciones"/>

                <ButtonToolbar>
                    <OverlayTrigger
                    style={{background:'#2e373e'}}
                    trigger="click"
                    key='share'
                    placement='top'
                    overlay={
                        <Popover id={`popover-positioned-top`} style={{background:'#343a40'}}>
                        {/* <Popover.Title as="h3" style={{background:'#343a40'}}>{`Popover top`}</Popover.Title> */}
                        <Popover.Content style={{background:'#343a40', position:"relative", bottom:'50px'}}>
                        <div className="share-btns">
                            <button style={{backgroundColor:'#3b5999', color:'#fff', border:'none', borderRadius:'50px', marginRight: '4px'}}><i class="fab fa-facebook-f"></i></button>
                            <button style={{backgroundColor:'#55acee', color:'#fff', border:'none', borderRadius:'50px', marginRight: '4px'}}><i class="fab fa-twitter"></i></button>
                            <button style={{backgroundColor:'#e4405f', color:'#fff', border:'none', borderRadius:'50px', marginRight: '4px'}}><i class="fab fa-instagram"></i></button>
                            <button style={{backgroundColor:'#25d366', color:'#fff', border:'none', borderRadius:'50px', marginRight: '4px'}}><i class="fab fa-whatsapp"></i></button>
                            <button style={{backgroundColor:'#757575', color:'#fff', border:'none', borderRadius:'50px', marginRight: '4px'}}><i class="fas fa-link"></i></button>
                        </div>
                        </Popover.Content>
                        </Popover>
                    }
                    >
                        <button className="share"><i class="fas fa-share"></i>Compartir</button>
                    </OverlayTrigger>
                </ButtonToolbar>

                

        </Conteiner>
    )
}

const Conteiner = styled.div`
    margin:0;
    padding:0;
    position: relative;
    left: 22px;
    bottom: 20px;
    display: block;
    

    
   .facebook{
        background-color: #3b5999;
    }

    .messenger{
        background-color: #0084ff;
    }

    .whatsapp{
        background-color: #25d366;
    }

    .twitter{
        background-color: #55acee;
    }

    .prev{
        width: 32px;
        height: 32px;
        border-radius: 100px;
        border:none;
        background-color: rgba(0, 0, 0, 0.2);
        color: #fff;

    :hover{
        color: #3cd458;
    }
    }

    .rev{
        width: 32px;
        height: 32px;
        border-radius: 100px;
        margin-left: 10px;
        border:none;
        background:none;
        color: #fff;

    :hover{
        color: #3cd458;
    }
    }

    .vol{
        width: 32px;
        height: 32px;
        border-radius: 100px;
        position:relative;
        left: 200px;
        bottom: 46px;
        border:none;
        background:none;
        color: #fff;

    :hover{
        color: #3cd458;
    }
    }

    .volume{
        position: absolute;
        z-index: 100000;
        color: #fff;

    :hover{
        color: #3cd458;
    }
    }


    .start{
        width: 48px;
        height: 48px;
        border-radius: 100px;
        border:none;
        margin: 10px;
        background-color: rgba(0, 0, 0, 0.2);
        font-size: 24px;
        color: #fff;

    :hover{
        color: #3cd458;
    }
    }
img{
    width: 24px;
    height: 24px;
    left:245px;
    bottom:78px;
    position: relative;
    cursor:pointer;
    transition-duration: all .3s;
    :hover{
        transition-duration: all .3s;
        bottom:85px;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
    }
}



   .share{
       margin:auto;
       padding:auto;
       /* display:flex; */
       position: absolute;
       left:431px;
       top:20px;
       width: 99px;
       background: none;
        height: 28px;
        border-radius: 30px;
        border: solid 1px #ffffff;
        color: #fff;
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
   }


`


