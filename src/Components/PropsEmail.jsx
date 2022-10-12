import React from "react";
import * as S from '../Styles/propsStyles';

export default function PropsEmail({ modal }) {
  return (
    <div>
      <S.btnGithub onClick={modal}>E-mail</S.btnGithub>
    </div>
  );
}