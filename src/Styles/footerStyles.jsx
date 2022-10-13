import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Container = styled.section`
    background-color: #000000;
     width:100%;
     height:14vh;
     display:flex;
    justify-content: flex-end;
    align-items: center;
`

export const Div = styled.div`
    width:5vw;
    margin-right:1vw;
    display:flex;
    justify-content: center;
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