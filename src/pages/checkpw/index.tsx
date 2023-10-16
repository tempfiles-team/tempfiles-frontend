import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { bindActionCreators } from 'redux';

import EyeIcon from '../../assets/Eye.svg';
import EyeHiddenIcon from '../../assets/EyeHidden.svg';
import { FileListBox, Button, SkeletonUI } from '../../components';
import { actionCreators } from '../../state';
import { getDate, getFileSize } from '../../utils';
import * as S from './styled';

export const CheckPasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');
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
        duration: 3000,
        icon: '🔑',
      });
    } else {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_BACKEND_BASEURL}/checkpw/${checkfileid}?pw=${password}`
        );
        SetDownloadFileProps({
          isEncrypted: true,
          token: res.data.token,
        });
        navigate(`/dl/${checkfileid}`);
        toast.success('통과!', {
          duration: 3000,
          icon: '🎉',
        });
      } catch (err) {
        setPassword('');
        toast.error('비밀번호를 다시 확인해주세요...', {
          duration: 3000,
          icon: '🔑',
        });
      }
    }
  };

  useEffect(() => {
    const getFileProps = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_BACKEND_BASEURL}/file/${checkfileid}`
        );
        setLoading(false);
        setFileProps({
          filename: res.data.filename,
          size: getFileSize(res.data.size),
          uploadDate: getDate(res.data.uploadDate),
        });
      } catch (err) {
        navigate('/');
        toast.error('잘못된 링크입니다', {
          duration: 3000,
          icon: '🔥',
        });
      }
    };
    getFileProps();
  }, [checkfileid, navigate]);

  return (
    <S.CheckPasswordPageContainer>
      {!loading ? (
        <>
          <FileListBox
            key={fileProps.filename}
            filename={fileProps.filename}
            size={fileProps.size}
            uploadDate={fileProps.uploadDate}
            fileId=""
            isEncrypted={true}
            click={() => {}}
          />
          <S.PasswordInputSection>
            <S.CheckPasswordInput
              type={passwordFilter ? 'password' : 'text'}
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
            <S.EyeIconWrapper
              onClick={() => setPasswordFilter(!passwordFilter)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3.5rem',
                height: '3.5rem',
                marginLeft: '44rem',
                backgroundColor: 'var(--color-background-black)',
              }}
            >
              <img src={passwordFilter ? EyeHiddenIcon : EyeIcon} alt="eye icon" />
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
