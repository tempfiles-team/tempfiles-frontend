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
import * as S from './styled';

export const CheckPasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const { checkfileid } = useParams<{ checkfileid: string }>();
  const [fileProps, setFileProps] = useState({
    filename: '',
    size: '',
    uploadDate: { year: 0, month: 0, day: 0 },
  });
  // const { year, month, day } = getDate(checkPasswordFileProps.uploadDate);
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
        url: `${process.env.REACT_APP_BACKEND_BASEURL}/checkpw/${checkfileid}?pw=${password}`,
      })
        .then((res) => {
          SetDownloadFileProps({
            isEncrypted: true,
            token: res.data.token,
          });
          navigate(`/download/${checkfileid}`);
          toast.success('통과!', {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
        .catch((err) => {
          console.log(err);
          setPassword('');
          toast.error('비밀번호를 다시 확인해주세요...', {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
    }
  };

  useEffect(() => {
    const getFileProps = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_BACKEND_BASEURL}/file/${checkfileid}`,
      })
        .then((res) => {
          setLoading(false);
          setFileProps({
            filename: res.data.filename,
            size: getFileSize(res.data.size),
            uploadDate: getDate(res.data.uploadDate),
          });
        })
        .catch((err) => {
          console.log(err);
          navigate('/');
          toast.error('error 문의해주세요...', {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
    };
    getFileProps();
  }, [checkfileid, navigate]);
  return (
    <S.CheckPasswordPageContainer>
      {!loading ? (
        <>
          <FileBox>
            파일이름:{fileProps.filename} / 크기:{fileProps.size} / 업로드된 날짜:{' '}
            {fileProps.uploadDate.year}-{fileProps.uploadDate.month}-{fileProps.uploadDate.day}
          </FileBox>
          <S.PasswordInputSection>
            <S.CheckPasswordInput
              value={password}
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
