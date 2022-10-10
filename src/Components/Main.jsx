import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import * as S from '../Styles/mainStyles';
import thayssaPic from './Images/thayssaPic.png'
import thayssaSecondPic from './Images/thayssaSecondPic.png'

export default function Main(){
    return(
        <S.Section>
            <S.ContainerHome>
                <S.thayssaPic src={thayssaPic} alt='Thayssa sorrindo para câmera, usando uma blusa vermelha e com o cabelo preso'/>
                <S.TextContainer>
                    <S.Title>Thayssa A. Souza</S.Title>
                    <S.Subtitle>Desenvolvedora Web Full-Stack</S.Subtitle>
                    <S.Languages>
                        Habilidades
                    </S.Languages>
                </S.TextContainer>
        </S.ContainerHome>

            <S.ContainerAbout id='about'>
                <S.AboutTitle>Sobre mim</S.AboutTitle>
                <S.Dash></S.Dash>
                <S.AboutMe>
                    <div>
                        <S.firstText>Sou a Thayssa, brasileira, fisioterapeuta de formação, mas trabalho na área de tecnologia desde 2022.
                            Sou Desenvolvedora Front-End pela instituição Vai na Web e estou complentando o curso de Desenvolvedora Web Full Stack pela escola Let's Code. </S.firstText>
                        <S.secondText>Sempre gostei de entender o porquê as coisas aconteciam e por solucionar problemas, por isso, decidi migrar para área de TI após contato com Front-End.</S.secondText>
                    </div>
                    <S.firstImgAbout src={thayssaSecondPic} alt="" />
                </S.AboutMe>
            </S.ContainerAbout>
        </S.Section>
    )
}