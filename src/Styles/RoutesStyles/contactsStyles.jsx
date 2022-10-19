import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Section = styled.section`
    width:100%;
    height:80vh;    
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
`


export const Form = styled.form`
    width:40%;
    height:60vh;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
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
`
export const InputContact = styled.input`
    width:30vw;
    height:7vh;
    font-size:18px;
    border-radius: 10px;
    margin-left:2vw;
    margin-bottom:4vh;
`

export const TextMessage = styled.textarea`
    width:30vw;
    height:15vh;
    font-size:18px;
    border-radius: 10px;
    margin-left:2vw;
    margin-bottom:2vh;
`

export const Button = styled.button`
    width:7vw;
    height:4vh;
    font-size:15px;
    font-weight: bold;
    margin-right:3vw;
`

export const ContainerSocials = styled.section`
    height:40vh;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    margin-right:7vw;
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