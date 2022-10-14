import React from 'react';

import * as S from './styled';

type ButtonProps = {
  bgColor: string;
  label: string;
};

export const Button: React.FC<ButtonProps> = ({ bgColor, label }) => (
  <S.ButtonContainer bgColor={bgColor} value={label} />
);
