import React from 'react';

import * as S from './styled';

type ButtonProps = {
  bgColor: string;
  label: string;
  click: () => void;
};

export const Button: React.FC<ButtonProps> = ({ bgColor, label, click }) => (
  <S.ButtonContainer bgColor={bgColor} value={label} onClick={click} />
);
