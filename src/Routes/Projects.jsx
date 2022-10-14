import React, { useState, useEffect, useRef } from "react";
import * as S from '../Styles/RoutesStyles/projectsStyles';
import cresposImg from '../Components/Images/cresposImg.png';
import lolImg from '../Components/Images/lolImg.png';
import odsImgC from '../Components/Images/odsImgC.png';
import recipesImg from '../Components/Images/recipesImg.png';
import theWitcherImg from '../Components/Images/theWitcherImg.png'
import letsMoviesImg from '../Components/Images/letsMoviesImg.png'

export default function Projects(){
    return(
        <S.ContainerProjects>
            <S.ProjectTitle>Projetos</S.ProjectTitle>
            <S.Dash></S.Dash>
            <S.FirstProjects>
                <S.ProjectImgAndText>
                    <S.ProjectsImg src={recipesImg} alt="" />
                </S.ProjectImgAndText>
                <S.ProjectImgAndText>
                    <S.ProjectsImg src={lolImg} alt="" />
                </S.ProjectImgAndText>
                <S.ProjectImgAndText>
                    <a href="https://thayssa-souza.github.io/Crespos">
                        <S.ProjectsImg src={cresposImg} alt="" />
                    </a>
                </S.ProjectImgAndText>
            </S.FirstProjects>
            <S.SecondProjects>
                <S.ProjectImgAndText>
                    <S.ProjectsImg src={theWitcherImg} alt="" />
                </S.ProjectImgAndText>
                <S.ProjectImgAndText>
                    <S.ProjectsImg src={odsImgC} alt="" />
                </S.ProjectImgAndText>
                <S.ProjectImgAndText>
                    <S.ProjectsImg src={letsMoviesImg} alt="" />
                </S.ProjectImgAndText>
            </S.SecondProjects>
        </S.ContainerProjects>
    )
}