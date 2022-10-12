import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.section`
    background-color: #000000;
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (min-width:360px) and (max-width: 900px){
        width:100%;
        height:10vh;
    }
`

export const Logo = styled.img`
    height:15vh;
    @media screen and (min-width:360px) and (max-width: 900px){
        height:10vh;
    }
`

export const List = styled.ul`
    list-style: none;
    width:40vw;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Item = styled.li`
    font-size:20px;
    width:12vw;
    display:flex;
    justify-content: center;
    align-items: center;
    &:hover{
        font-size:24px;
        cursor:pointer;
    }
`

export const Links = styled(Link)`
    text-decoration:none;
    color: #FFFF;
`