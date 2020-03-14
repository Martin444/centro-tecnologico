import React, {useState} from 'react'
import styled from 'styled-components'


export default function PlayLive() {

    const [Play, setPlay] = useState(true)

    const onPlay = () =>{
        setPlay(!Play)
        console.log(Play)
    }

    return (
        <DivPlay>
            <Button onClick={onPlay}>
            {
                Play ?
                    <i className="fas fa-play" style={{color:'#fff'}}></i>
                    :
                    <i className="fas fa-pause" style={{color:'#fff'}}></i>
            }
            </Button>
            <h5>La cima - Charlie Papa</h5>
            <h3>Informació de la canción</h3>

            <div className="botons">
            <button type="button" className="pod"><i class="fas fa-podcast"></i>Podcasts</button>
            <button type="button" className="pod2"><i class="fas fa-comment"></i>Comentarios</button>
            </div>
        </DivPlay>
    )
}

const DivPlay = styled.div`
    margin: auto;
    padding:20px;

    && h3{
        margin:0;
        padding:0;
        font-family: Roboto;
        font-size: 12px;
        font-weight: normal;
        letter-spacing: normal;
        color: #ffffff;
    }

    .botons{
        padding-top: 30px;
    }

    .pod{
        width: 123px;
        height: 36px;
        background:none;
        border-radius: 40px;
        margin-right: 20px;
        border: solid 1px #ffffff;
        color:#ffffff;
        font-size: 14px;
  font-weight: bold;
    }

    .pod i{
        margin-right:5px;
    }

    .pod2{
        width: 154px;
        height: 36px;
        background:none;
        border-radius: 40px;
        margin-right: 20px;
        border: solid 1px #ffffff;
        color:#ffffff;
        font-size: 14px;
  font-weight: bold;
    }

    .pod2 i{
        margin-right: 5px;
    }
`

const Button = styled.button`
    margin: 15px;
    padding:0;
    width: 64px;
    height: 64px;
    border-radius: 100px;
    border:none;
    font-size:28px;
    box-shadow: 0 0 30px 0 rgba(60, 212, 88, 0.4);
    background-color: #3cd458;
    cursor:pointer;
`