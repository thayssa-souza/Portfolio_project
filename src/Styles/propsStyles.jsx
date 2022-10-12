import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const btnEmail = styled.button`
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
    &:hover{
        cursor:pointer;
        background-color: #c69552;
    }
`
export const btnGithub = styled.button`
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
    &:hover{
        cursor:pointer;
        background-color: #c69552;
    }
`

export const btnLinkedin = styled.button`
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
    &:hover{
        cursor:pointer;
        background-color: #c69552;
    }
`