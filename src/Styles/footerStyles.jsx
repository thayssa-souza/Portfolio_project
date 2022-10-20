import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Container = styled.section`
    background-color: #000000;
    width:100%;
    height:14vh;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:9vh;
    @media screen and (min-width:360px) and (max-width:800px){
        display:flex;
        justify-content: space-evenly;
    }
`

export const Div = styled.div`
    width:5vw;
    margin-right:1vw;
    display:flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width:360px) and (max-width:800px){
        
    }
`

export const Github = styled.img`
    height:5vh;
    width:2.5vw;
    &:hover{
        height:6vh;
        width:3vw;
        cursor:pointer;
    }
    @media screen and (min-width:360px) and (max-width: 800px){
        width:8vw;
        height:4vh;
        &:hover{
        width:10vw;
        height:5vh;
        cursor:pointer;
        }
    }
`

export const Linkedin = styled.img`
    height:5vh;
    width:2.5vw;
    &:hover{
        height:6vh;
        width:3vw;
        cursor:pointer;
    }
    @media screen and (min-width:360px) and (max-width: 800px){
        width:8vw;
        height:4vh;
        &:hover{
        width:10vw;
        height:5vh;
        cursor:pointer;
        }
    }
`

export const Email = styled.img`
    height:5vh;
    width:2.5vw;
    &:hover{
        height:6vh;
        width:3vw;
        cursor:pointer;
    }
    @media screen and (min-width:360px) and (max-width: 800px){
        width:8vw;
        height:4vh;
        &:hover{
        width:10vw;
        height:5vh;
        cursor:pointer;
        }
    }
`