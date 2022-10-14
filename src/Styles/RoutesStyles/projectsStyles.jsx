import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const ContainerProjects = styled.section`
    width:100%;
    background-color: #000000;
    display:flex;
    flex-direction: column;
`
export const ProjectTitle = styled.h2`
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

export const FirstProjects = styled.section`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top:17vh;
`

export const ProjectImgAndText = styled.div`
    width:30vw;
    height:40vh;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const ProjectsImg = styled.img`
    width:25vw;
    height:35vh;
    &:hover{
        width:29vw;
        height:39vh;
        cursor:pointer;
    }
`

export const SecondProjects = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top:15vh;
`