import React, { useState, useEffect, useRef } from "react";
import * as S from './Styles/globalStyles';
import Header from './Components/Header';
import Footer from "./Components/Footer";

export default function App(){
  return(
    <>
    <S.GlobalStyle />
    <Header />
    {/* <Footer /> */}
    </>
  )
}