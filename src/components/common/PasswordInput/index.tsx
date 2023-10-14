import React from 'react';

import EyeIcon from '../../../assets/Eye.svg';
import EyeHiddenIcon from '../../../assets/EyeHidden.svg';
import * as S from './styled';

interface PasswordInputProps {
  type: string;
  isFillter: boolean;
  setPassword: any;
  setPasswordFilter: any;
  placeholder: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  type,
  setPassword,
  placeholder,
  setPasswordFilter,
  isFillter,
}) => (
  <S.PasswordInputContainer>
    <S.Input
      type={type}
      onChange={(text) => {
        setPassword(text.target.value.replace(/(\s*)/g, ''));
      }}
      placeholder={placeholder}
    />
    <div
      onClick={() => setPasswordFilter(!isFillter)}
      style={{
        zIndex: 10,
        width: '3rem',
        height: '3rem',
        marginRight: '1.2rem',
      }}
    >

      <img src={isFillter ? EyeHiddenIcon : EyeIcon} alt="eye icon" />
    </div>
  </S.PasswordInputContainer>
);
