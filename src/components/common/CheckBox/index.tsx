import React from 'react';

import CheckIcon from '../../../assets/CheckIcon.svg';
import * as S from './styled';

type CheckBoxProps = {
  click: React.MouseEventHandler<HTMLDivElement>;
  isCheck: boolean;
  label: string;
};

export const CheckBox: React.FC<CheckBoxProps> = ({ click, isCheck, label }) => (
  <S.CheckBoxContainer>
    <S.CheckBoxObject onClick={click} isCheck={isCheck}>
      <img src={CheckIcon} alt="check icon" />
    </S.CheckBoxObject>
    <S.CheckBoxText>{label}</S.CheckBoxText>
  </S.CheckBoxContainer>
);
