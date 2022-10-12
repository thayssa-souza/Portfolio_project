import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Section = styled.section`
    width:100%;
    height:85vh;
`
export const Title = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContactTitle = styled.h2`
    color:white;
    text-align: center;
    font-size: 30px;
    font-weight:400;
    margin-top:5vh;
`

export const Dash = styled.div`
    border:solid #c69552;
    width:20vw;
    margin-top:1.5vh;
`

export const ContainerContacts = styled.section`
    width:100%;
    height:85%;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ContainerGithub = styled.div`
    width:28vw;
    height:42vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:4vh;
`

export const githubImg = styled.img`
    width:26vw;
    height:40vh;
    margin-top:2vh;
    &:hover{
        width:28vw;
        height:42vh;
        cursor:pointer;
     }
`

export const ContainerLinkedin = styled.div`
    width:28vw;
    height:42vh;
    display:flex;
    flex-direction: column;
    margin-top:4vh;
    justify-content: center;
    align-items: center;
`

export const linkedinImg = styled.img`
    width:26vw;
    height:40vh;
    margin-top:2vh;
    &:hover{
        width:28vw;
        height:42vh;
        cursor:pointer;
     }
`

export const ContainerEmail = styled.div`
    width:28vw;
    height:42vh;
    display:flex;
    flex-direction: column;
    margin-top:4vh;
    justify-content: center;
    align-items: center;
`

export const emailImg = styled.img`
    width:7vw;
    margin-top:2vh;
    &:hover{
        width:9vw;
        cursor:pointer
    }
`