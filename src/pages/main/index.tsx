import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { bindActionCreators } from 'redux';

import {
  CheckBox,
  PasswordInput,
  UpLoadButton,
  FileFind,
  Progress,
  DownloadCountSlider,
  ExpireTime,
} from '../../components';
import { actionCreators } from '../../state';
import { getFileSize, getTime } from '../../utils';
import * as S from './styled';

export const MainPage: React.FC = () => {
  const typingText = ['.', '..', '...'];
  const [typingCount, setTypingCount] = useState(0);
  const [uploading, setUploading] = useState(true);
  const [progressValue, setProgressValue] = useState(0);
  const [progressStateText, setProgressStateText] = useState('uploading');

  const [expireTimeBoolean, setExpireTimeBoolean] = useState(false);
  const [downloadCountBoolean, setDownloadCountBoolean] = useState(false);
  const [passwordBoolean, setPasswordBoolean] = useState(false);
  const [passwordFilter, setPasswordFilter] = useState(true);

  const [expireTime, setExpireTime] = useState(1);
  const [downloadCount, setDownloadCount] = useState(100);
  const [password, setPassword] = useState('');

  const [fileProps, setFileProps] = useState({
    files: [
      {
        filename: '',
        size: '',
        fileType: '',
        fileData: null,
      },
    ],
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { SetDownloadFileProps } = bindActionCreators(actionCreators, dispatch);

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const filesArray = Array.from(event.target.files);

    const updatedFileProps = {
      files: filesArray.map((file: File) => ({
        filename: file.name,
        size: getFileSize(file.size),
        fileType: file.type,
        fileData: file,
      })),
    };

    setFileProps(updatedFileProps);
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const filesArray = Array.from(event.dataTransfer.files);

    const updatedFileProps = {
      files: filesArray.map((file: File) => ({
        filename: file.name,
        size: getFileSize(file.size),
        fileType: file.type,
        fileData: file,
      })),
    };

    setFileProps(updatedFileProps);
  };

  const dragOver = (event: any) => {
    event.preventDefault();
  };

  const UpLoad = async () => {
    if (fileProps.files[0].filename !== '') {
      const formdata = new FormData();
      fileProps.files.map((file) => {
        formdata.append('file', file.fileData);
      });

      await axios({
        method: 'post',
        url: `${import.meta.env.VITE_APP_BACKEND_BASEURL}/upload${
          passwordBoolean && password != '' && password != undefined ? `?pw=${password}` : ''
        }`,
        data: formdata,
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-Download-Limit': downloadCountBoolean ? downloadCount : 100,
          'X-Time-Limit': expireTimeBoolean ? expireTime : 180,
        },
        onUploadProgress(progress) {
          setUploading(false);
          setProgressValue(Math.floor((progress.loaded / progress.total) * 100));
          if (Math.floor((progress.loaded / progress.total) * 100) === 100) {
            setProgressStateText('백엔드 처리중');
          }
        },
      })
        .then(async (res) => {
          setUploading(true);
          toast.success('업로드 성공!', {
            duration: 3000,
            icon: '🎉',
          });
          SetDownloadFileProps({
            folderId: res.data.folderId,
            token: res.data.isEncrypted ? res.data.token : null,
            isEncrypted: res.data.isEncrypted,
          });
          navigate(`/dl/${res.data.folderId}`);
        })
        .catch(() => {
          toast.error('업로드 실패..', {
            duration: 3000,
            icon: '🔥',
          });
          setUploading(true);
        });
    } else {
      toast.error('파일을 선택해주세요!', {
        duration: 3000,
        icon: '🔥',
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
                setExpireTimeBoolean(!expireTimeBoolean);
              }}
              isCheck={expireTimeBoolean}
              label={'유지기간'}
            />
            <CheckBox
              click={() => {
                setDownloadCountBoolean(!downloadCountBoolean);
                setDownloadCount(1);
              }}
              isCheck={downloadCountBoolean}
              label={'다운로드 횟수'}
            />
            <CheckBox
              click={() => setPasswordBoolean(!passwordBoolean)}
              isCheck={passwordBoolean}
              label={'비밀번호'}
            />
          </S.MainPageCheckBoxSection>
          {expireTimeBoolean && (
            <ExpireTime
              expireTime={Number(expireTime)}
              setExpireTime={setExpireTime}
              expireTimePlusButton={['1분', '10분', '1시간', '1일']}
              time={getTime(Number(expireTime))}
            />
          )}
          {downloadCountBoolean && (
            <DownloadCountSlider
              downloadCount={downloadCount}
              setDownloadCount={setDownloadCount}
            />
          )}
          {passwordBoolean && (
            <PasswordInput
              type={passwordFilter ? 'password' : 'text'}
              isFillter={passwordFilter}
              setPassword={setPassword}
              setPasswordFilter={setPasswordFilter}
              placeholder="비밀번호를 입력해주세요."
            />
          )}
          <FileFind
            handleDragOver={dragOver}
            handleDrop={handleDrop}
            handleChangeFile={handleChangeFile}
            fileProps={fileProps}
          />
          <UpLoadButton type={'button'} value={'업로드'} onClick={UpLoad} />
        </>
      ) : (
        <Progress
          value={progressValue}
          fileName="개쩌는 파일"
          typing={typingText[typingCount]}
          stateText={progressStateText}
        />
      )}
    </S.MainPageContainer>
  );
};
