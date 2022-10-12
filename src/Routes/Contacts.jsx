import React, { useState, useEffect, useRef } from "react";
import * as S from '../Styles/RoutesStyles/contactsStyles';
import emailIcon from '../Components/Images/emailIcon.png';
import githubImg from '../Components/Images/githubImg.png';
import linkedinImg from '../Components/Images/linkedinImg.png';
import PropsEmail from "../Components/PropsEmail";
import PropsGithub from '../Components/PropsGithub';
import PropsLinkedin from "../Components/PropsLinkedin";


export default function Contacts(){
    const [openEmail, setOpenEmail] = useState(false);
    const [openGithub, setOpenGithub] = useState(false);
    const [openLinkedin, setOpenLinkedin] = useState(false);

    return(
        <S.Section>
            <S.Title>
                <S.ContactTitle>Contatos</S.ContactTitle>
                <S.Dash></S.Dash>
            </S.Title>
            <S.ContainerContacts>
            <S.ContainerGithub>
                <PropsGithub modal={() => {
                    setOpenGithub(!openGithub);
                }} />
                {openGithub &&
                <a href="https://github.com/thayssa-souza">
                    <S.githubImg src={githubImg} alt="Perfil no github" />
                </a> }
            </S.ContainerGithub>
            
            <S.ContainerLinkedin>
            <PropsLinkedin modal={() => {
                    setOpenLinkedin(!openLinkedin);
                }} />
                {openLinkedin &&
                <a href="https://www.linkedin.com/in/thayssa-souza/">
                    <S.linkedinImg src={linkedinImg} alt="Perfil no Linkedin"/>
                </a> }
            </S.ContainerLinkedin>

            <S.ContainerEmail>
                <PropsEmail modal={() => {
                    setOpenEmail(!openEmail);
                }} />
                {openEmail && <a href = "mailto:thayssa.souzaf@gmail.com">
                    <S.emailImg src={emailIcon} alt="Foto de um e-mail" />
                </a>}               
            </S.ContainerEmail>
        </S.ContainerContacts>
        </S.Section>
    )
}