import React, { useState, useEffect, useRef } from "react";
import * as S from '../Styles/RoutesStyles/homeStyles';
import thayssaPic from "../Components/Images/thayssaPic.jpeg";

export default function Home(){
    return(
    <S.ContainerHome>
            <S.thayssaPic src={thayssaPic} alt='Thayssa sorrindo para câmera, usando uma blusa vermelha e com o cabelo preso'/>
        <S.TextContainer>
            <S.Title>Thayssa A. Souza</S.Title>
            <S.Subtitle>Desenvolvedora Web Full-Stack</S.Subtitle>
            <S.Languages>Habilidades</S.Languages>
        </S.TextContainer>
    </S.ContainerHome>
    )
}