import React, { useState, useEffect, useRef } from "react";
import Footer from '../Components/Footer';
import * as S from '../Styles/RoutesStyles/projectsStyles';
import cresposImg from '../Components/Images/cresposImg.png';
import lolImg from '../Components/Images/lolImg.png';
import odsImgC from '../Components/Images/odsImgC.png';
import recipesImg from '../Components/Images/recipesImg.png';
import theWitcherImg from '../Components/Images/theWitcherImg.png'
import letsMoviesImg from '../Components/Images/letsMoviesImg.png'

export default function Projects(){
        const settings = {
          dots: true,
          wrapAround: true,
          pauseOnHover: true,
          autoplay: true,
          slidesToShow: 2,
          speed: 900,
          cellAlign: "center",
          cellSpacing: 300,
          slidesToScroll: 1,
          dragThreshold: 1,
          adaptiveWidth: false,
          enableKeyboardControls: true,
          defaultControlsConfig: {
            nextButtonText: "Próximo >>",
            prevButtonText: "<< Anterior",
            pagingDotsStyle: {
              fill: "black",
            },
          }
        };

    return(
        <S.ContainerProjects>
            <S.ProjectTitle>Projetos</S.ProjectTitle>
            <S.Dash></S.Dash>
            
            <S.CarouselContainer {...settings}>
                <div>
                    <a href="https://thayssa-souza.github.io/LeagueOfLegends_LoginPage/" target="_blank"> 
                        <S.Img src={lolImg} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://recipes-seven-zeta.vercel.app/" target="_blank">
                        <S.Img src={recipesImg} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://thayssa-souza.github.io/Crespos/" target="_blank">
                        <S.Img src={cresposImg} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://thayssa-souza.github.io/The-Witcher/" target="_blank">
                        <S.Img src={theWitcherImg} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://objetivos-desenvolvimento-sustentavel.vercel.app/" target="_blank">
                        <S.Img src={odsImgC} alt="" />
                    </a>
                </div>
                <div>
                    <S.Img src={letsMoviesImg} alt="" />
                </div>
            </S.CarouselContainer>   

            <Footer />

        </S.ContainerProjects>
    )
}