/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import styled from 'styled-components'
import {Animated} from "react-animated-css";
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function DescriptionLive() {

    const [baner, setBaner] = React.useState([])

  React.useEffect(() => {

    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection('banercourse').get()
      setBaner(data.docs.map(doc => doc.data()))


      baner.map(van =>{
        console.log(van.displayName)
      })
    }
    
    fetchData()

  }, [])
  

    return (
        <Description>
            <Animated  animationIn="zoomIn" animationOut="flipOutX" animationInDuration={400} animationOutDuration={400} isVisible={true}>
               {baner.map(ban =>{
                   console.log(ban)
                   return(
                       <div className="container">
                            <div className="description-header">
                                <h1>{ban.displayName}</h1>
                                <h5>{ban.description}</h5>
                            </div>

                            <div className="btns">
                                <div className="follow-btns">
                                    <button className="btn-primary">Registrarme</button>
                                    <button className="btn-secundary"><i className="fas fa-share"></i>Compartir</button>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                   );
                
               })    
               }
            </Animated>
        </Description>
    )
}

const Description = styled.div`
    width: 100%;
    display: grid;
    top: 400%;
    margin:0;
    padding:auto;
    /* padding-left:40px; */
    padding-bottom:100px;

    .container{
        margin:0;
        padding:auto;
    }

    && .btns{
        margin: auto;
        padding:auto;
        display: grid;
        margin-top: 10px;
    }

    && .follow-btns && .share-btn{
        margin: auto;
    }

    && .btn-primary{
        width: 127px;
        height: 36px;
        margin-right: 10px;
        border-radius: 40px;
        border: none;
        background-color: #3cd458;
        font-size: 14px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.14px;
        color: #ffffff;
        cursor:pointer;
    }

    .btn-secundary{
        width: 134px;
        height: 36px;
        border-radius: 40px;
        border: solid 1px #ffffff;
        background:none;
        font-family: Poppins;
        font-size: 14px;
        font-weight: bold;
        line-height: 1.4;
        letter-spacing: 0.14px;
        color: #ffffff;
        cursor:pointer;
    }

    .btn-secundary i{
        margin-right: 5px;
    }


    && h5{
        color:#fff;
        font-size: 16px;
        font-weight: normal;
        margin-top:6px;
    }

    && span{
        color: #fff;
        padding: 0 0 0 100px;
        right: 23%;
        margin: auto;
        position: relative;
    }
`