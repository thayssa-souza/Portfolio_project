import React, { useState, useEffect, useRef } from "react";
import * as S from '../Styles/RoutesStyles/aboutSyles';
import Footer from '../Components/Footer';
import thayssaSecondPic from '../Components/Images/thayssaSecondPic.png';
import thayssaThirdPic from '../Components/Images/thayssaThirdPic.png';
import thayssaFourPic from '../Components/Images/thayssaFourPic.png'

export default function About(){
    return(
        <S.ContainerAbout>
            <S.AboutTitle>Sobre mim</S.AboutTitle>
            <S.Dash></S.Dash>
            <S.firstAboutMe>
                <S.firstText>Sou a Thayssa, brasileira, fisioterapeuta de formação, mas trabalho na área de tecnologia desde 2022.
                    Sou Desenvolvedora Front-End pela instituição Vai na Web e estou complentando o curso de Desenvolvedora Web Full Stack pela escola Let's Code. </S.firstText>
                <S.firstImgAbout src={thayssaSecondPic} alt="" />
            </S.firstAboutMe>

            <S.secondAboutMe>
                <S.secondImgAbout src={thayssaThirdPic} alt="" />
                <S.secondText>Sempre gostei de entender o porquê as coisas aconteciam e solucionar problemas, por isso, decidi migrar para área de tecnologia e estou realizada com a decisão.</S.secondText>
            </S.secondAboutMe>

            <S.thirdAboutMe>
                <S.thirdText>Gosto de passar meu tempo livre junto aos livros. Fã de Harry Potter (#TeamCorvinal) e suspense, tenho como livro preferido It do Stephen King, seguido por A Ordem da Fênix de Jk Rowling e O Poderoso Chefão de Mario Puzo.</S.thirdText>
                <S.thirdImgAbout src={thayssaFourPic} alt=""/>
            </S.thirdAboutMe>

            <Footer />
        </S.ContainerAbout>
    )
}