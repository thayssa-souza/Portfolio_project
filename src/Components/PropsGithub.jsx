import React from "react";
import * as S from '../Styles/propsStyles'

export default function PropsGithub({ modal }) {
  return (
    <div>
      <S.btnGithub onClick={modal}>Github</S.btnGithub>
    </div>
  );
}