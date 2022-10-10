import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import * as S from '../Styles/headerStyles';
import Home from '../Routes/Home';
import About from '../Routes/About';
import Project from '../Routes/Projects';
import Contats from '../Routes/Contacts'
import logo from './Images/logo.png';
import burguerMenu from './Images/burguerMenu.jpg'
import linkedinIcon from './Images/linkedinIcon.png';
import githubIcon from './Images/githubIcon.png';

export default function Header(){
    return(
        <S.Container>
            <S.Logo src={logo} alt='TAS escrito em dourado dentro de um círculo dourado, com o fundo preto' />
            <BrowserRouter>
            <S.Navegation>
                <S.List>
                    <S.Item>
                        <S.Links href='Home'>Início</S.Links>
                        </S.Item>
                    <S.Item>
                        <S.Links href='S.Linksbout'>Sobre mim</S.Links>
                        </S.Item>
                    <S.Item>
                        <S.Links href=''>Projetos</S.Links>
                        </S.Item>
                    <S.Item><S.Links href=''>Contatos</S.Links></S.Item>
                </S.List>
            </S.Navegation>
            <S.ContainerImages>
                <a href="https://www.linkedin.com/in/thayssa-souza/">
                <S.Linkedin src={linkedinIcon} alt='Ícone linkedin' />
                </a>
                <a href="https://github.com/thayssa-souza">
                <S.Github src={githubIcon} alt='ícone github' />
                </a>
            </S.ContainerImages>

        <Routes>
        <Route path="Home" />
        <Route path="About" element={<About />} />
        {/* <Route path="Projects" element={<Projects />} /> */}
        {/* <Route path="Contacts" element={<Contacts />} /> */}
      </Routes>
    </BrowserRouter>
        </S.Container>
    )
}