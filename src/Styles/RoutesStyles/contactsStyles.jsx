import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Section = styled.section`
    width:100%;
    height:95vh;
    background-color: #000000;
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
    height:73vh;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (min-width:360px) and (max-width:800px){
        display:flex;
        flex-direction: column;
    }
`


export const Form = styled.form`
    width:40%;
    height:60vh;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (min-width:360px) and (max-width:800px){
        width:100%;
        margin-top:10vh;
    }
`

export const ContactsBox = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
`

export const LabelContact = styled.label`
    color:white;
    font-size:18px;
    margin-bottom: 1vh;
    @media screen and (min-width:360px) and (max-width:800px){
        margin-left:3vw;
        font-size:22px;
    }
`
export const InputContact = styled.input`
    width:30vw;
    height:7vh;
    font-size:18px;
    border-radius: 10px;
    margin-left:2vw;
    margin-bottom:4vh;
    @media screen and (min-width:360px) and (max-width:800px){
        width:90%;
    }
`

export const TextMessage = styled.textarea`
    width:30vw;
    height:15vh;
    font-size:18px;
    border-radius: 10px;
    margin-left:2vw;
    margin-bottom:2vh;
    @media screen and (min-width:360px) and (max-width:800px){
        width:90%;
    }
`

export const Button = styled.button`
    width:7vw;
    height:4vh;
    font-size:15px;
    font-weight: bold;
    margin-right:3vw;
    @media screen and (min-width:360px) and (max-width:800px){
        width:25vw;
        font-size:20px;
        margin-top:2vh;
    }
`

export const ContainerSocials = styled.section`
    height:40vh;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    margin-right:7vw;
    @media screen and (min-width:360px) and (max-width:800px){
        width:90%;
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top:8vh;
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
    @media screen and (min-width:360px) and (max-width:800px){
        width:30vw;
        height:7vh;
        font-size:22px;
        &:hover{
        cursor:pointer;
        background-color: #c69552;
        }
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
    @media screen and (min-width:360px) and (max-width:800px){
        width:30vw;
        height:7vh;
        font-size:22px;
        &:hover{
        cursor:pointer;
        background-color: #c69552;
        }
    }
`