import styled, { createGlobalStyle, keyframes } from "styled-components";
import Carousel from "nuka-carousel/lib/carousel";

export const ContainerProjects = styled.section`
    width:100%;
    height:85vh;
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

export const CarouselContainer = styled(Carousel)`
    display:flex;
    margin-top:17vh;
`

export const Img = styled.img`
    width:29vw;
    height:45vh;
    border: 10px solid #e5ac5f;
    &:hover{
        cursor:pointer;
        border: none;
    }
`