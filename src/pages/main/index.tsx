import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';

import { CheckBox, PasswordInput, UpLoadButton, FileFind, Progress } from '../../components';
import { actionCreators } from '../../state';
import { getFileSize } from '../../utils';
import * as S from './styled';

export const MainPage: React.FC = () => {
  const typingText = ['.', '..', '...'];
  const [typingCount, setTypingCount] = useState(0);
  const [uploading, setUploading] = useState(true);
  const [progressValue, serProgressValue] = useState(0);
  const [retentionPeriod, setRetentionPeriod] = useState(false);
  const [downloadCount, setDownloadCount] = useState(false);
  const [passwordBoolean, setPasswordBoolean] = useState(false);
  const [password, setPassword] = useState('');
  const [fileProps, setFileProps] = useState({ name: '', size: '', fileType: '', fileData: '' });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { SetDownloadFileProps } = bindActionCreators(actionCreators, dispatch);

  const handleChangeFile = (event: any) => {
    setFileProps({
      name: event.target.files[0].name,
      size: getFileSize(event.target.files[0].size),
      fileType:
        event.target.files[0].type === '' ? 'application/actet-stream' : event.target.files[0].type,
      fileData: event.target.files[0],
    });
  };

  const UpLoad = async () => {
    if (fileProps.name != '' && fileProps.size != '') {
      const formdata = new FormData();
      formdata.append('file', fileProps.fileData);
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_BACKEND_BASEURL}/upload${
          passwordBoolean && password != '' && password != undefined ? `?pw=${password}` : ''
        }`,
        data: formdata,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress(progress) {
          setUploading(false);
          serProgressValue(Math.floor((progress.loaded / progress.total) * 100));
        },
      })
        .then(async (res) => {
          setUploading(true);
          toast.success('업로드 성공!', {
            autoClose: 3000,
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          SetDownloadFileProps({
            Name: res.data.filename,
            Size: getFileSize(res.data.size),
            LastModified: res.data.expires,
          });
          navigate('/download');
        })
        .catch((err) => {
          console.log(err);
          toast.error('업로드 실패..', {
            autoClose: 3000,
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
    } else {
      toast.error('파일을 선택해주세요!', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypingCount(typingCount + 1);
      if (typingCount >= 2) {
        setTypingCount(0);
      }
    }, 500);
    return () => {
      clearInterval(typingInterval);
    };
  }, [typingCount]);
  return (
    <S.MainPageContainer>
      {uploading ? (
        <>
          <S.MainPageCheckBoxSection>
            <CheckBox
              click={() => {
                setRetentionPeriod(false);
                toast.success('제작중!', {
                  autoClose: 1000,
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              }}
              isCheck={retentionPeriod}
              label={'유지기간'}
            />
            <CheckBox
              click={() => {
                setDownloadCount(false);
                toast.success('제작중!', {
                  autoClose: 1000,
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              }}
              isCheck={downloadCount}
              label={'다운로드 횟수'}
            />
            <CheckBox
              click={() => setPasswordBoolean(!passwordBoolean)}
              isCheck={passwordBoolean}
              label={'비밀번호'}
            />
          </S.MainPageCheckBoxSection>
          {passwordBoolean ? (
            <PasswordInput
              onChange={(text) => {
                setPassword(text.target.value.replace(/(\s*)/g, ''));
              }}
              placeholder="비밀번호를 입력해주세요."
            />
          ) : (
            <></>
          )}
          <FileFind handleChangeFile={handleChangeFile} fileProps={fileProps} />
          <UpLoadButton type={'button'} value={'업로드'} onClick={UpLoad} />
        </>
      ) : (
        <Progress
          value={progressValue}
          fileName={fileProps.name}
          typing={typingText[typingCount]}
        />
      )}
    </S.MainPageContainer>
  );
};
