import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Section = styled.section`
    background-color: #000000;    
`

export const ContainerHome = styled.section`
    width:100%;
    height: 85vh;
    display:flex;
    justify-content: space-evenly;
    align-items:center; 
`

export const thayssaPic = styled.img`
    height:60vh;
    border-radius: 140px;
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

export const Languages = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 13vw;
    height:6vh;
    font-size:18px;
    color:white;
    border-radius:80px;
    border: solid #e5ac5f;
    background-color: #000000;
    margin-top:10vh;
    &:hover{
        cursor:pointer;
        background-color: #c69552;
    }
`