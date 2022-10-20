import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const ContainerAbout = styled.section`
    width:100%;
    background-color: #000000;
`

export const AboutTitle = styled.h2`
    color:white;
    text-align: center;
    font-size: 30px;
    font-weight:400;
    margin-top:5vh;
`

export const Dash = styled.div`
    border:solid #c69552;
    width:20vw;
    margin-left:39vw;
    margin-top:1.5vh;
`

export const firstAboutMe = styled.div`
    height:65vh;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top:7vh;
    @media screen and (min-width:360px) and (max-width:800px){
        width:100%;
        display:flex;
        flex-direction:column;
        margin-top:30vh;
    }

`

export const firstText = styled.p`
    color:#FFFF;
    width:37vw;
    font-size:20px;
    line-height: 6vh;
    text-align: center;
    @media screen and (min-width:360px) and (max-width:800px){
        width:100%;
        font-size:25px;
    }
`

export const firstImgAbout = styled.img`
    height:55vh;
    @media screen and (min-width:360px) and (max-width:800px){
        margin-top:5vh;
    }
`

export const secondAboutMe = styled.section`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top:7vh;
    @media screen and (min-width:360px) and (max-width:800px){
        width:100%;
        display:flex;
        flex-direction:column;
        margin-top:30vh;
    }
`

export const secondImgAbout = styled.img`
    height:55vh;
    @media screen and (min-width:360px) and (max-width:800px){
        margin-top:10vh;
    }
`

export const secondText = styled.p`
    color:#FFFF;
    width:35vw;
    font-size:20px;
    line-height: 5vh;
    text-align: center;
    @media screen and (min-width:360px) and (max-width:800px){
        width:100%;
        font-size:25px;
        margin-top:5vh;
    }
`

export const thirdAboutMe = styled.section`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top:12vh;
    margin-bottom:5vh;
    @media screen and (min-width:360px) and (max-width:800px){
        width:100%;
        display:flex;
        flex-direction:column;
    }
`

export const thirdImgAbout = styled.img`
    height:55vh;
    @media screen and (min-width:360px) and (max-width:800px){
        margin-top:5vh;
    }
`

export const thirdText = styled.p`
    color:#FFFF;
    width:35vw;
    font-size:20px;
    line-height: 5vh;
    text-align: center;
    @media screen and (min-width:360px) and (max-width:800px){
        width:100%;
        font-size:25px;
        margin-top:5vh;
    }
`