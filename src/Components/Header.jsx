import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import * as S from '../Styles/headerStyles';
import Home from '../Routes/Home';
import About from '../Routes/About';
import Projects from '../Routes/Projects';
import Contacts from '../Routes/Contacts'
import logo from './Images/logo.png';
import burguerMenu from './Images/burguerMenu.jpg'

export default function Header(){
    return(
        <S.Container>
            <S.Logo src={logo} alt='TAS escrito em dourado dentro de um círculo dourado, com o fundo preto' />
            <BrowserRouter>
            <nav>
                <S.List>
                    <S.Item>
                        <S.Links to='/'>Início</S.Links>
                    </S.Item>
                    <S.Item>
                        <S.Links to='/Projects'>Projetos</S.Links>
                    </S.Item>
                    <S.Item>
                        <S.Links to="/About">Sobre mim</S.Links>
                    </S.Item>
                    <S.Item><S.Links to='/Contacts'>Contatos</S.Links></S.Item>
                </S.List>
            </nav>
            

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/About" element={<About/>} />
                <Route path="/Projects" element={<Projects />} /> 
                <Route path="/Contacts" element={<Contacts />} /> 
            </Routes>
            </BrowserRouter>
        </S.Container>
    )
}