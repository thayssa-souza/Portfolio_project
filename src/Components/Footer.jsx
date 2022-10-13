import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import * as S from '../Styles/footerStyles';
import linkedinIcon from './Images/linkedinIcon.png';
import githubIcon from './Images/githubIcon.png';
import emailIcon from './Images/emailIcon.png'

export default function Footer(){
    return(
        <S.Container> 
            <S.Div>
                <a href="https://github.com/thayssa-souza">
                    <S.Github src={githubIcon} alt='ícone github' />
                </a>
            </S.Div>
            <S.Div>
                <a href="https://www.linkedin.com/in/thayssa-souza/">
                    <S.Linkedin src={linkedinIcon} alt='Ícone linkedin' />
                </a>
            </S.Div>
            <S.Div>
                <a href = "mailto:thayssa.souzaf@gmail.com">
                    <S.Email src={emailIcon} alt="ícone para mandar um e-mail" />
                </a>
            </S.Div>
        </S.Container>
    )
}