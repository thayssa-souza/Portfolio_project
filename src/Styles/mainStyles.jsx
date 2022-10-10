import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import {Link} from 'react-router-dom'

export const Section = styled.section`
        background-color: #000000;
`

export const ContainerHome = styled.section`
    height: 85vh;
    display:flex;
    justify-content: space-evenly;
    align-items:center;
`

export const thayssaPic = styled.img`
    height:60vh;
    border-radius: 100px;
`

export const TextContainer = styled.section`
    display:flex;
    flex-direction: column;
`

export const Title = styled.h2`
    font-size:42px;
    font-weight: 700;
    color:#c69552;
    display:flex;
    justify-content: center;
`

export const Subtitle = styled.h2`
    font-size:30px;
    font-weight:400;
    color: #FFFF;
    margin-top:3vh;
`

export const Languages = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 13vw;
    height:6vh;
    font-size:18px;
    color:white;
    border-radius:80px;
    background-color: #e5ac5f;
    margin-top:10vh;
    &:hover{
        cursor:pointer;
        background-color: #c69552;
    }
`

export const ContainerAbout = styled.section`

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

export const AboutMe = styled.div`
    height:78vh;
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin-top:10vh;
`

export const firstText = styled.p`
    color:#FFFF;
    width:40vw;
    font-size:20px;
    line-height: 5vh;
    text-align: center;
    margin-left:5vw;
`

export const secondText = styled.p`
    color:#FFFF;
    width:38vw;
    font-size:20px;
    line-height: 5vh;
    text-align: center;
    margin-top: 7vh;
    margin-left:5vw;
`

export const firstImgAbout = styled.img`
    height:55vh;
`