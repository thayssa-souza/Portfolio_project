import React, { useState, useEffect, useRef } from "react";
import Footer from '../Components/Footer';
import * as S from '../Styles/RoutesStyles/homeStyles';
import thayssaPic from "../Components/Images/thayssaPic.jpeg";
import htmlIconC from '../Components/Images/htmlIconC.png';
import iconCss from '../Components/Images/iconCss.png';
import jsIcon from '../Components/Images/jsIcon.png';
import reactIconC from '../Components/Images/reactIconC.png';
import cSharpIcon from '../Components/Images/cSharpIcon.png';
import iconSql from '../Components/Images/iconSql.png';
import dotnetIcon from '../Components/Images/dotnetIcon.png'

export default function Home(){
    const settings = {
        dots: true,
        wrapAround: true,
        pauseOnHover: false,
        autoplay: true,
        slidesToShow: 3,
        speed: 800,
        cellAlign: "center",
        cellSpacing: 50,
        slidesToScroll: 1,
        dragThreshold: 1,
        adaptiveWidth: false,
        enableKeyboardControls: true,
        defaultControlsConfig: {
          nextButtonText: "Próximo >>",
          prevButtonText: "<< Anterior",
          pagingDotsStyle: {
            fill: "white",
          },
        }
      };

    return(
        <S.Section>
            <S.FirstContainerHome>
                    <S.thayssaPic src={thayssaPic} alt='Thayssa olhando para o lado, usando uma blusa vermelha e com o cabelo cacheado solto'/>
                <S.TextContainer>
                    <S.Title>Thayssa A. Souza</S.Title>
                    <S.Subtitle>Desenvolvedora Web Full-Stack</S.Subtitle>
                    <a href="#skills">
                        <S.Languages>Habilidades</S.Languages>
                    </a>
                </S.TextContainer>
            </S.FirstContainerHome>
            <S.SecondContainerHome>
                <S.SkillsTitle id="skills">Habilidades</S.SkillsTitle>
                <S.Dash></S.Dash>

                <S.CarouselContainer {...settings}>
                <S.Figure>
                    <S.Icon src={htmlIconC} alt="" />
                </S.Figure>
                <S.Figure>
                    <S.Icon src={iconCss} alt="" />
                </S.Figure>
                <S.Figure>
                    <S.Icon src={jsIcon} alt="" />
                </S.Figure>
                <S.Figure>
                    <S.Icon src={reactIconC} alt="" />
                </S.Figure>
                <S.Figure>
                    <S.Icon src={cSharpIcon} alt="" />
                </S.Figure>
                <S.Figure>
                    <S.Icon src={iconSql} alt="" />
                </S.Figure>
                <S.Figure>
                    <S.Icon src={dotnetIcon} alt="" />
                </S.Figure>
            </S.CarouselContainer>

            </S.SecondContainerHome>
            <Footer />
    </S.Section>
    )
}