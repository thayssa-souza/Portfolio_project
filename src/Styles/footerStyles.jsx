import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Container = styled.section`
    background-color: #000000;
     width:100%;
     height:12vh;
     display:flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Github = styled.img`
    height:6vh;
    width:3vw;
    margin-top:4vh;
    &:hover{
        height:7vh;
        width:4vw;
        cursor:pointer;
    }
    @media screen and (min-width:360px) and (max-width: 900px){
        height:3vh;
    }
`

export const Linkedin = styled.img`
    height:6vh;
    width:3vw;
    margin-top:4vh;
    &:hover{
        height:7vh;
        width:4vw;
        cursor:pointer;
    }
    @media screen and (min-width:360px) and (max-width: 900px){
        height:3vh;
    }
`

export const Email = styled.img`
    height:6vh;
    width:3vw;
    margin-top:4vh;
    &:hover{
        height:7vh;
        width:4vw;
        cursor:pointer;
    }
`