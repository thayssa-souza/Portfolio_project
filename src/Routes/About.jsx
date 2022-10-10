import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import * as S from '../Styles/aboutSyles';
import thayssaSecondPic from '../Components/Images/thayssaSecondPic.png'

export default function About(){
    return(
        <>
        {/* <S.ContainerAbout>
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
            </S.ContainerAbout> */}
        </>
    )
}