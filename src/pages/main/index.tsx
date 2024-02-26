import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

import {
  CheckBox,
  UpLoadButton,
  FileFind,
  Progress,
  DownloadCountSlider,
  ExpireTime,
} from '../../components';
import { getFileSize, getTime } from '../../utils';
import * as S from './styled';

export function MainPage() {
  const typingText = ['.', '..', '...'];
  const [typingCount, setTypingCount] = useState(0);
  const [uploading, setUploading] = useState(true);
  const [progressValue, setProgressValue] = useState(0);
  const [progressStateText, setProgressStateText] = useState('uploading');

  const [expireTimeBoolean, setExpireTimeBoolean] = useState(false);
  const [downloadCountBoolean, setDownloadCountBoolean] = useState(false);
  const [hideBoolean, sethideBoolean] = useState(false);

  const [expireTime, setExpireTime] = useState(1);
  const [downloadCount, setDownloadCount] = useState(100);

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

  const { toast } = useToast();

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

  const dragOver = (event: React.DragEvent<HTMLLabelElement>) => {
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
        url: `${import.meta.env.VITE_APP_BACKEND_BASEURL}/upload`,
        data: formdata,
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-Download-Limit': downloadCountBoolean ? downloadCount : 100,
          'X-Time-Limit': expireTimeBoolean ? expireTime : 180,
          'X-Hidden': hideBoolean,
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
          // toast.success('업로드 성공!', {
          //   duration: 3000,
          //   icon: '🎉',
          // });
          toast({
            title: '업로드 성공!',
            description: '파일이 업로드 되었습니다.',
            duration: 3000,
          });
          navigate(`/dl/${res.data.folderId}`);
        })
        .catch((err) => {
          setUploading(true);
          if (err.response.status === 413) {
            // toast.error('파일 용량이 너무 큽니다.', {
            //   duration: 3000,
            //   icon: '🔥',
            // });
            toast({
              title: '파일 용량이 너무 큽니다.',
              description: '파일 용량이 너무 큽니다.',
              duration: 3000,
            });
          } else {
            // toast.error('업로드 실패!', {
            //   duration: 3000,
            //   icon: '🔥',
            // });
            toast({
              title: '업로드 실패!',
              description: '업로드 실패!',
              duration: 3000,
            });
          }
        });
    } else {
      // toast.error('파일을 선택해주세요!', {
      //   duration: 3000,
      //   icon: '🔥',
      // });
      toast({
        title: '파일을 선택해주세요!',
        description: '파일을 선택해주세요!',
        duration: 3000,
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
              click={() => sethideBoolean(!hideBoolean)}
              isCheck={hideBoolean}
              label={'숨기기'}
            />
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
                setDownloadCount(50);
              }}
              isCheck={downloadCountBoolean}
              label={'다운로드 횟수'}
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
          <FileFind
            handleDragOver={dragOver}
            handleDrop={handleDrop}
            handleChangeFile={handleChangeFile}
            fileProps={fileProps}
            hideBoolean={hideBoolean}
          />
          <UpLoadButton type={'button'} value={'업로드'} onClick={UpLoad} />
        </>
      ) : (
        <Progress
          value={progressValue}
          files={fileProps.files}
          typing={typingText[typingCount]}
          stateText={progressStateText}
        />
      )}
    </S.MainPageContainer>
  );
}
