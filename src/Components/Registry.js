import React from 'react'
import styled from 'styled-components'

export default function Registry() {
    return (
        <Register>
            <input type="text"  placeholder="Usuario"/>
            <input type="text"  placeholder="Nombre"/>
            <input type="password"  placeholder="Contraseña"/>
            <input type="password"  placeholder="Repetir Contraseña"/>
            <input type="Email"  placeholder="Email"/>
            <input type="text"  placeholder="27/08/29"/>
            <input type="text"  placeholder="Sexo"/>
            <input type="text"  placeholder="País"/>
            <button className="btn-primary">Registrarme</button>
            <button className="btn-social"><i class="fab fa-facebook-f" style={{fontSize:'14px', marginRight:'5px', marginTop:'4px'}}></i>Registrar con Facebook</button>
        </Register>
    )
}

const Register = styled.div`
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