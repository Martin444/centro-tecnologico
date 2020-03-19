import React from 'react'
import { connect } from 'react-redux';
import { setUser, setLogin } from '../actions/index';
import { auth } from '../utils/firebase';

import { ProgressBar, Dropdown } from 'react-bootstrap'
import styled from 'styled-components'

function UserLogin(props) {

    const logoutFacebook = () => {
        auth().signOut()
          .then(() => {
            props.setUser({});
            props.setLogin(false);
          });
      }

    return (
        <Container>
            {/* <div className="levels">
                    <h6>Nivel 100</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    <p>+2.000 Exp</p>
            </div> */}
                <img className="user-perfil" src={props.user.photoURL} alt="Perfil del usuario"/>
            <div className="perfil-data">
                <h6>{props.user.displayName}</h6>

                <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" style={{width:'100px', background:'none', color:'#3cd458', padding:'0', margin:'0'}}>
                    opciones
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    {/* <Dropdown.Item >Mis cursos</Dropdown.Item> */}
                    {/* <Dropdown.Item >Ayuda</Dropdown.Item> */}
                    <Dropdown.Item onClick={logoutFacebook}>Cerrar sesión</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
        </Container>
    )
}

const mapDispatchToProps = {
    setUser,
    setLogin,
  };
  
  const mapStateToProps = state => {
    return {
      user: state.user,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);

const Container = styled.div`
    display:flex;
    margin:auto;

    .levels{
        margin: auto;
        margin-left: 10px;
    }

    .perfil-data{
        margin: 10;
        display:initial;
    }

    .perfil-data h6{
        position:relative;
        top: 10px;
        right: 2px;
        font-size: 14px;
    }

    .op{
        color: rgba(0, 0, 0, 0.3);
        background:none;
    }

    .user-perfil{
        border-radius: 100px;
        width: 60px;
        height: 20px;
        margin-left: 10px;
    }

     h6{
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.12px;
        color: #ffffff;
    }

    .levels p{
        font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.12px;
  color: #ffffff;
    }

    .progressBar{
        width: 80px;
    margin-top: 40px;
    margin:auto;
    padding:0;    
    background-color:rgba(0, 0, 0, 0.3);
    height:4px;
  }
`