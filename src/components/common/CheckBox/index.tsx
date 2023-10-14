import React from 'react';

// import { ReactComponent as CheckIcon } from '../../../assets/CheckIcon.svg';
import * as S from './styled';

type CheckBoxProps = {
  click: any;
  isCheck: boolean;
  label: string;
};

export const CheckBox: React.FC<CheckBoxProps> = ({ click, isCheck, label }) => (
  <S.CheckBoxContainer>
    <S.CheckBoxObject onClick={click} isCheck={isCheck}>
      {/* <CheckIcon
        color={isCheck ? 'var(--color-check-true-icon)' : 'var(--color-check-false-icon)'}
      /> */}
    </S.CheckBoxObject>
    <S.CheckBoxText>{label}</S.CheckBoxText>
  </S.CheckBoxContainer>
);
