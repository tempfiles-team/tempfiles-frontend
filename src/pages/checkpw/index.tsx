import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FileBox } from '../../components';
import { actionCreators } from '../../state';
import { RootState } from '../../state/reducers';
import * as S from './styled';

export const CheckPasswordPage: React.FC = () => {
  const checkPasswordFileProps = useSelector((state: RootState) => state.CheckPasswordFileProps);
  const { year, month, day } = checkPasswordFileProps.lastModified;
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { SetDownloadFileProps } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {});
  return (
    <S.CheckPasswordPageContainer>
      <FileBox>
        파일이름:{checkPasswordFileProps.filename} / 크기:{checkPasswordFileProps.size} / 업로드된
        날짜: {year}-{month}-{day}
      </FileBox>
      <S.PasswordInputSection>
        <S.CheckPasswordInput
          onChange={(text) => {
            console.log(text);
          }}
          placeholder="비밀번호를 입력해주세요."
        />
      </S.PasswordInputSection>
    </S.CheckPasswordPageContainer>
  );
};
