import React, {useState} from 'react'
import styled from 'styled-components'

// Imagen
import Nov from '../Images/nov.jpg'

// Dependencias
import {Dropdown, ProgressBar} from 'react-bootstrap'
import Slider from "react-slick";



export default function Podcast() {

    const [Play, setPlay] = useState(true)

    const onPlay = () =>{
        setPlay(!Play)
        console.log(Play)
    }

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        focusOnSelect: true,
      };

    return (
        <Container>
            <div className="Podcast">
            <div className="Podcast-title">
                <h4>Podcast</h4>

                <div className="btns">
                    <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="btn">
                    Temporada 12
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="btn">
                    Episodio 1
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>

        <div className="carousel">
        <Slider {...settings}>
            <div className="Card">
                <div className="Item">
                    <ImgItem>
                    <ButtonPlay onClick={onPlay}>
                    {
                        Play ?
                            <i className="fas fa-play" style={{color:'#fff'}}></i>
                            :
                            <i className="fas fa-pause" style={{color:'#fff'}}></i>
                    }
                    </ButtonPlay>
                    <h6 className="Episodie">Episodio 1</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    </ImgItem>
                </div>
            </div>

            <div className="Card">
                <div className="Item">
                    <ImgItem>
                    <ButtonPlay onClick={onPlay}>
                    {
                        Play ?
                            <i className="fas fa-play" style={{color:'#fff'}}></i>
                            :
                            <i className="fas fa-pause" style={{color:'#fff'}}></i>
                    }
                    </ButtonPlay>
                    <h6 className="Episodie">Episodio 1</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    </ImgItem>
                </div>
            </div>

            <div className="Card">
                <div className="Item">
                    <ImgItem>
                    <ButtonPlay onClick={onPlay}>
                    {
                        Play ?
                            <i className="fas fa-play" style={{color:'#fff'}}></i>
                            :
                            <i className="fas fa-pause" style={{color:'#fff'}}></i>
                    }
                    </ButtonPlay>
                    <h6 className="Episodie">Episodio 1</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    </ImgItem>
                </div>
            </div>


            <div className="Card">
                <div className="Item">
                    <ImgItem>
                    <ButtonPlay onClick={onPlay}>
                    {
                        Play ?
                            <i className="fas fa-play" style={{color:'#fff'}}></i>
                            :
                            <i className="fas fa-pause" style={{color:'#fff'}}></i>
                    }
                    </ButtonPlay>
                    <h6 className="Episodie">Episodio 1</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    </ImgItem>
                </div>
            </div>


            <div className="Card">
                <div className="Item">
                    <ImgItem>
                    <ButtonPlay onClick={onPlay}>
                    {
                        Play ?
                            <i className="fas fa-play" style={{color:'#fff'}}></i>
                            :
                            <i className="fas fa-pause" style={{color:'#fff'}}></i>
                    }
                    </ButtonPlay>
                    <h6 className="Episodie">Episodio 1</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    </ImgItem>
                </div>
            </div>

            <div className="Card">
                <div className="Item">
                    <ImgItem>
                    <ButtonPlay onClick={onPlay}>
                    {
                        Play ?
                            <i className="fas fa-play" style={{color:'#fff'}}></i>
                            :
                            <i className="fas fa-pause" style={{color:'#fff'}}></i>
                    }
                    </ButtonPlay>
                    <h6 className="Episodie">Episodio 1</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    </ImgItem>
                </div>
            </div>


            <div className="Card">
                <div className="Item">
                    <ImgItem>
                    <ButtonPlay onClick={onPlay}>
                    {
                        Play ?
                            <i className="fas fa-play" style={{color:'#fff'}}></i>
                            :
                            <i className="fas fa-pause" style={{color:'#fff'}}></i>
                    }
                    </ButtonPlay>
                    <h6 className="Episodie">Episodio 1</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    </ImgItem>
                </div>
            </div>


            <div className="Card">
                <div className="Item">
                    <ImgItem>
                    <ButtonPlay onClick={onPlay}>
                    {
                        Play ?
                            <i className="fas fa-play" style={{color:'#fff'}}></i>
                            :
                            <i className="fas fa-pause" style={{color:'#fff'}}></i>
                    }
                    </ButtonPlay>
                    <h6>Episodio 1</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    </ImgItem>
                </div>
            </div>


            <div className="Card">
                <div className="Item">
                    <ImgItem>
                    <ButtonPlay onClick={onPlay}>
                    {
                        Play ?
                            <i className="fas fa-play" style={{color:'#fff'}}></i>
                            :
                            <i className="fas fa-pause" style={{color:'#fff'}}></i>
                    }
                    </ButtonPlay>
                    <h6 className="Episodie">Episodio 1</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    </ImgItem>
                </div>
            </div>


            <div className="Card">
                <div className="Item">
                    <ImgItem>
                    <ButtonPlay onClick={onPlay}>
                    {
                        Play ?
                            <i className="fas fa-play" style={{color:'#fff'}}></i>
                            :
                            <i className="fas fa-pause" style={{color:'#fff'}}></i>
                    }
                    </ButtonPlay>
                    <h6 className="Episodie">Episodio 1</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    </ImgItem>
                </div>
            </div>

            <div className="Card">
                <div className="Item">
                    <ImgItem>
                    <ButtonPlay onClick={onPlay}>
                    {
                        Play ?
                            <i className="fas fa-play" style={{color:'#fff'}}></i>
                            :
                            <i className="fas fa-pause" style={{color:'#fff'}}></i>
                    }
                    </ButtonPlay>
                    <h6 className="Episodie">Episodio 1</h6>
                    <ProgressBar variant="success" now={60} className="progressBar" />
                    </ImgItem>
                </div>
            </div>


        </Slider>
        </div>
        <br/>
        <div className="reprod">
            <h4>Beneficios de ser programador</h4>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
            <span>1.200.000 Reproducciones</span>
        </div>

        <div className="actions">
            <p>Duración 10:20 min | Peso: 20 MB |</p>
            <button type="button" className="primary"><i class="fas fa-cloud-download-alt" style={{ marginRight:'5px'}}>Descargar</i></button>
            <button type="button" className="favorito"><i class="far fa-heart" style={{ marginRight:'5px'}}></i>Favorito</button>
            <button type="button" className="favorito"><i class="fas fa-share" style={{ marginRight:'5px'}}></i>Compartir</button>
        </div>
        
        </div>
        </Container>
    )
}

const Container = styled.div`
    margin: 0;
    padding: auto;
    display: block;
    width: 100%;
    height:709px;;
    background-color: #2f343a;

    .reprod span {
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.24px;
    color: #3cd458;
    position: relative;
    right: 355px;
  }

    .Podcast{
        margin:auto;
        padding:0;
        width: 1024px; 
    }

    .Podcast-title{
        width: 1024px;
        padding-top: 50px;
        display: block;
        text-align: left;
        color: #fff;
    }
    .Podcast-title h4{
        font-size: 24px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.24px;
        color: #ffffff;
    }

    
    .btns{
        margin:0;
        padding: 0;
        display: flex;
    }

    .btn{
        margin:0;
        padding:auto;
        margin-right: 10px;
        align-items: left;
        border-radius: 100px;
        border: solid 1px #3cd458;
        color: #3cd458;
        font-size: 12px;
        background: none;
        
    }
    
    .carousel{
        margin: 0;
        padding:0;
        display:block;
        background-color: #2f343a;
    }
    .Card{
        margin:auto;
        padding: auto;
        display:flex;
    }

    .actions{
        display: flex;
        padding-top: 10px;
    }

    .actions p{
        font-size: 12px;
        margin: 5px;
    }

    .primary{
        width: 103px;
        height: 28px;
        border: none;
        margin-right: 9px;
        border-radius: 50px;
        background-color: #3cd458;
        font-size: 12px;
        font-weight: normal;
        letter-spacing: 0.14px;
        color: #ffffff;
        cursor: pointer;
    }

    .favorito{
        width: 99px;
        height: 28px;
        background: none;
        margin-right: 9px;
        border-radius: 50px;
        border: solid 1px #ffffff;
        color: #fff;
        font-size: 12px;
    }
`

const ImgItem = styled.div`
    margin:0;
    padding:0;
    width: 200px;
  height: 200px;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, rgba(52, 58, 64, 0.2), #343a40), url(${Nov});
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);


  .progressBar{
    width: 160px;
    margin-top: 40px;
    margin:auto;
    padding:0;    
    background-color:rgba(0, 0, 0, 0.3);
    height:4px;
  }

  .Item{
      padding:20px;
  }

 
`

const ButtonPlay = styled.button`
    margin: 0;
    padding:auto;
    top: 30px;
    margin-top: 65px;
    margin-bottom: 20px;
    width: 64px;
    opacity: 0;
    height: 64px;
    display: inline-flex;
    border-radius: 100px;
    border:none;
    font-size:28px;
    box-shadow: 0 0 30px 0 rgba(60, 212, 88, 0.4);
    background-color: #3cd458;
    cursor:pointer;

    :hover{
        transition: ease-in .3s all;
        opacity: 1;
    }


    h6{
        margin:0;
        padding:0;
    }

    i{
        margin: auto;
        padding:auto;
    }

`

