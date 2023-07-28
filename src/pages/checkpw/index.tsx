import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';


import { FileBox, Button, SkeletonUI } from '../../components';
import { actionCreators } from '../../state';
import { getDate, getFileSize } from '../../utils';
import { ReactComponent as EyeIcon } from '../../assets/Eye.svg';
import { ReactComponent as EyeHiddenIcon } from '../../assets/EyeHidden.svg';
import * as S from './styled';

import {
  PasswordInput,
} from '../../components';

export const CheckPasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisibility] = useState(false); // 비밀번호 보기/숨기기 상태
  const [loading, setLoading] = useState(true);
  const [passwordFilter, setPasswordFilter] = useState(true);
  const { checkfileid } = useParams<{ checkfileid: string }>();
  const [fileProps, setFileProps] = useState({
    filename: '',
    size: '',
    uploadDate: { year: 0, month: 0, day: 0 },
  });

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
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_BASEURL}/checkpw/${checkfileid}?pw=${password}`
        );
        SetDownloadFileProps({
          isEncrypted: true,
          token: res.data.token,
        });
        navigate(`/download/${checkfileid}`);
        toast.success('통과!', {
          autoClose: 1000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } catch (err) {
        console.log(err);
        setPassword('');
        toast.error('비밀번호를 다시 확인해주세요...', {
          autoClose: 1000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };

  useEffect(() => {
    const getFileProps = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_BASEURL}/file/${checkfileid}`
        );
        setLoading(false);
        setFileProps({
          filename: res.data.filename,
          size: getFileSize(res.data.size),
          uploadDate: getDate(res.data.uploadDate),
        });
      } catch (err) {
        console.log(err);
        navigate('/');
        toast.error('error 문의해주세요...', {
          autoClose: 1000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    };
    getFileProps();
  }, [checkfileid, navigate]);

  return (
    <S.CheckPasswordPageContainer>
      {!loading ? (
        <>
          <FileBox>
            파일이름: {fileProps.filename} / 크기: {fileProps.size} / 업로드된 날짜:{' '}
            {fileProps.uploadDate.year}-{fileProps.uploadDate.month}-{fileProps.uploadDate.day}
          </FileBox>
          <S.PasswordInputSection>
            <S.CheckPasswordInput
              type={passwordFilter ? 'password' : 'text'}
              value={password}
              isFillter={passwordFilter}
              setPassword={setPassword}
              onKeyPress={(e: any) => {
                if (e.key === 'Enter') {
                  passwordCheck();
                }
              }}
              onChange={(text) => {
                setPassword(text.target.value.replace(/(\s*)/g, ''));
              }}
              placeholder="비밀번호를 입력해주세요."
            />
            <S.EyeIconWrapper
              onClick={() => setPasswordFilter(!passwordFilter)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '4rem',
                height: '4rem',
                marginLeft: '44rem', // 눈 아이콘을 왼쪽으로 1rem 이동시킴
              }}
            >
              {passwordFilter ? <EyeHiddenIcon /> : <EyeIcon />}
            </S.EyeIconWrapper>
            <Button
              click={() => {
                passwordCheck();
              }}
              bgColor="var(--color-button-primary)"
              label="전송"
            />
          </S.PasswordInputSection>
        </>
      ) : (
        <>
          <SkeletonUI width="80rem" height="4.6rem" margin="0rem" />
          <SkeletonUI width="66rem" height="6rem" margin="4rem" />
        </>
      )}
    </S.CheckPasswordPageContainer>
  );
};
