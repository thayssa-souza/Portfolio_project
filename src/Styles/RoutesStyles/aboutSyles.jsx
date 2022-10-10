import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import {Link} from 'react-router-dom'

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
`

export const firstText = styled.p`
    color:#FFFF;
    width:37vw;
    font-size:20px;
    line-height: 6vh;
    text-align: center;
`

export const firstImgAbout = styled.img`
    height:55vh;
`

export const secondAboutMe = styled.section`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top:5vh;
`

export const secondImgAbout = styled.img`
    height:55vh;
`

export const secondText = styled.p`
    color:#FFFF;
    width:35vw;
    font-size:20px;
    line-height: 5vh;
    text-align: center;
`

export const thirdAboutMe = styled.section`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top:5vh;
`

export const thirdImgAbout = styled.img`
    height:55vh;
`

export const thirdText = styled.p`
    color:#FFFF;
    width:35vw;
    font-size:20px;
    line-height: 5vh;
    text-align: center;
`