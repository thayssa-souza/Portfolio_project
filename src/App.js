import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as S from './Styles/globalStyles';
import Header from './Components/Header';
// import Main from './Components/Main';

export default function App(){
  return(
    <>
    <S.GlobalStyle />
    <Header />
    {/* <Main /> */}
    </>
  )
}