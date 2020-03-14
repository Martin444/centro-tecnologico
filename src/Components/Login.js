import React from 'react'
import styled from 'styled-components'

export default function Login(props) {
    return (
        <DivLogin>
          
            <button onClick={props.login} className="btn-primary"><i class="fab fa-google" style={{fontSize:'14px', marginRight:'5px', marginTop:'4px'}}></i>iniciar con google</button>
            <button className="btn-social"><i class="fab fa-facebook-f" style={{fontSize:'14px', marginRight:'5px', marginTop:'4px'}}></i>iniciar con facebook</button>
        </DivLogin>
    )
}

const DivLogin = styled.div`
    margin:auto;
    padding:auto;
    input{
        width: 100%;
        text-align: left;
        margin: 5px;
        padding: 5px;
        padding-left: 20px;
        border: none;
        border-radius: 50px;
        background: #242a30;
        color: #fff;
    }

    .btn-primary{
        width: 100%;
        margin: 5px;
        height: 32px;
        border: none;
        border-radius: 50px;
        background-color: #3cd458;
        font-family: Poppins;
        font-size: 14px;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
    }

    .btn-social{
        width: 100%;
        margin: 5px;
        height: 32px;
        border: none;
        border-radius: 50px;
        background-color: #23599d;
        font-family: Poppins;
        font-size: 14px;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
    }
`