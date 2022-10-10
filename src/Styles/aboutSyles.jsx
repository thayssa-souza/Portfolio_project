import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import {Link} from 'react-router-dom'

export const ContainerAbout = styled.section`
    width:100%;
    height:100vh;
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