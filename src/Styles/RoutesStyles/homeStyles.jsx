import styled, { createGlobalStyle, keyframes } from "styled-components";
import Carousel from "nuka-carousel/lib/carousel";

export const Section = styled.section`
    width:100%;
    background-color: #000000;
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const FirstContainerHome = styled.section`
    width:100%;
    height: 85vh;
    display:flex;
    justify-content: space-evenly;
    align-items:center; 
`

export const thayssaPic = styled.img`
    height:60vh;
    border-radius: 100%;
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

export const SecondContainerHome = styled.section`
    width:100%;
    height:85vh;
    display:flex;
    flex-direction:column;
`

export const SkillsTitle = styled.h2`
    color:white;
    text-align: center;
    font-size: 30px;
    font-weight:400;
    margin-top:10vh;
`

export const Dash = styled.div`
    border:solid #c69552;
    width:20vw;
    margin-left:39vw;
    margin-top:1.5vh;
`

export const CarouselContainer = styled(Carousel)`
    display:flex;
    margin-top:17vh;
`

export const Figure = styled.figure`
    width:30vw;
    height:40vh;
    display:flex;
    justify-content: space-around;
    align-items: center;
`

export const Icon = styled.img`
    height:18vh;
`
