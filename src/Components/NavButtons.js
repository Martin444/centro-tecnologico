import React, { useState } from 'react'
import {ButtonToolbar, OverlayTrigger, Popover} from 'react-bootstrap'
import styled from 'styled-components'
import Registry from './Registry';
import Login from './Login';
import UserLogin from './UserLogin';

export default function NavButtons() {

    // Una validacion simple con Hooks
    const [user, serUser] = useState(false)

    const setUser = () =>{
        serUser(!user)
    }


    return (
        <DivBtns>

            {
                user ?
                <UserLogin/>
                :
               <div className="btns-log">

            <ButtonToolbar >
                    <OverlayTrigger
                    style={{background:'#2e373e'}}
                    trigger="click"
                    key='register'
                    placement='bottom'
                    overlay={
                        <Popover id={`popover-positioned-top`} style={{background:'#343a40', border:'none', boxShadow:'0 0 30px 0 rgba(0, 0, 0, 0.3)'}}>
                        {/* <Popover.Title as="h3" style={{background:'#343a40'}}>{`Popover top`}</Popover.Title> */}
                        <Popover.Content style={{background:'#343a40'}}>
                            <Login login={setUser}/>
                        </Popover.Content>
                        </Popover>
                    }
                    >
                    
                        <button className="btn-primary">iniciar sesión</button>
                    </OverlayTrigger>
            </ButtonToolbar>
               </div>
            
            }

            
        </DivBtns>
    )
}

const DivBtns = styled.div`
    display: flex;
    margin: auto;
    padding: 0;

    .btns-log{
        display:flex;
        margin:auto;
    }

    && .btn-primary {
        width: 134px;
        height: 32px;
        border: none;
        margin: 19px;
        border-radius: 50px;
        background-color: #3cd458;
        font-family: Poppins;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.14px;
        color: #ffffff;
        cursor: pointer;
    }
    && .btn-secundary {
        width: 134px;
        height: 32px;
        border: none;
        background: none;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.14px;
        color: #fff;
        cursor: pointer;
    }
`