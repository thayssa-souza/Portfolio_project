import React from "react";
import * as S from '../Styles/propsStyles';

export default function PropsLinkedin({ modal }) {
  return (
    <div>
      <S.btnLinkedin onClick={modal}>Linkedin</S.btnLinkedin>
    </div>
  );
}