import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';

import { FileBox, Button } from '../../components';
import { actionCreators } from '../../state';
import { RootState } from '../../state/reducers';
import { getDate } from '../../utils';
import * as S from './styled';

export const CheckPasswordPage: React.FC = () => {
  const checkPasswordFileProps = useSelector((state: RootState) => state.CheckPasswordFileProps);
  const [password, setPassword] = useState('');
  const { year, month, day } = getDate(checkPasswordFileProps.uploadDate);
  const dispatch = useDispatch();
  const { SetDownloadFileProps } = bindActionCreators(actionCreators, dispatch);

  const navigate = useNavigate();

  const passwordCheck = async () => {
    if (password === '') {
      toast.error('비밀번호를 입력해주세요.', {
        autoClose: 1000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_BACKEND_BASEURL}/checkpw/${checkPasswordFileProps.fileId}?pw=${password}`,
      })
        .then((res) => {
          SetDownloadFileProps({
            fileId: checkPasswordFileProps.fileId,
            isEncrypted: checkPasswordFileProps.isEncrypted,
            token: res.data.token,
          });
          navigate('/download');
          toast.success('통과!', {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error('비밀번호를 다시 확인해주세요...', {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
    }
  };
  useEffect(() => {
    if (checkPasswordFileProps.filename === null || checkPasswordFileProps.fileId === null) {
      navigate('/');
    }
  });
  return (
    <S.CheckPasswordPageContainer>
      <FileBox>
        파일이름:{checkPasswordFileProps.filename} / 크기:{checkPasswordFileProps.size} / 업로드된
        날짜: {year}-{month}-{day}
      </FileBox>
      <S.PasswordInputSection>
        <S.CheckPasswordInput
          onChange={(text) => {
            setPassword(text.target.value.replace(/(\s*)/g, ''));
          }}
          placeholder="비밀번호를 입력해주세요."
        />

        <Button
          click={() => {
            passwordCheck();
          }}
          bgColor="var(--color-button-primary)"
          label="전송"
        />
      </S.PasswordInputSection>
    </S.CheckPasswordPageContainer>
  );
};
