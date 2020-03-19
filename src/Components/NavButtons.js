import React from 'react'
import {ButtonToolbar, OverlayTrigger, Popover} from 'react-bootstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Login from './Login';
import UserLogin from './UserLogin';

function NavButtons(props) {



    return (
        <DivBtns>

            {
                props.login ?
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
                            <Login/>
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

const mapStateToProps = state => {
    return {
        login: state.login,
    };
};

export default connect(mapStateToProps)(NavButtons);

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