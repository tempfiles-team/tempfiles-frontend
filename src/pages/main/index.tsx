import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { uploadState } from '../../atom';
import { FileUpLoad, TextUpLoad, UpLoadButton } from '../../components';
import * as S from './styled';

export const MainPage: React.FC = () => {
  const [upload, setUpload] = useRecoilState(uploadState);
  const [typingCount, setTypingCount] = useState(0);
  const [uploading, setUploading] = useState(true);
  const [progressValue, setProgressValue] = useState(0);
  const [progressStateText, setProgressStateText] = useState('uploading');

  const [expireTimeBoolean, setExpireTimeBoolean] = useState(false);
  const [downloadCountBoolean, setDownloadCountBoolean] = useState(false);
  const [passwordBoolean, setPasswordBoolean] = useState(false);

  const [expireTime, setExpireTime] = useState(1);
  const [downloadCount, setDownloadCount] = useState(100);
  const [password, setPassword] = useState('');

  const [fileProps, setFileProps] = useState({
    filename: '',
    size: '',
    fileType: '',
    fileData: '',
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { SetDownloadFileProps } = bindActionCreators(actionCreators, dispatch);

  const handleChangeFile = (event: any) => {
    setFileProps({
      filename: event.target.files[0].name,
      size: getFileSize(event.target.files[0].size),
      fileType:
        event.target.files[0].type === '' ? 'application/actet-stream' : event.target.files[0].type,
      fileData: event.target.files[0],
    });
  };

  const UpLoad = async () => {
    if (fileProps.filename != '' && fileProps.size != '') {
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
            autoClose: 3000,
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          SetDownloadFileProps({
            fileId: res.data.fileId,
            token: res.data.isEncrypted ? res.data.token : null,
            isEncrypted: res.data.isEncrypted,
            //추후에 기한,다운로드횟수 추가예정
          });
          navigate(`/download/${res.data.fileId}`);
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
  }
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
      {upload.file ? (
        <FileUpLoad />
      ) : !upload.text && !upload.file ? (
        <S.MainPageButtonContainer>
          <UpLoadButton
            type={'button'}
            value={`파일 업로드`}
            onClick={() => setUpload({ file: true, text: false })}
            mainPage={true}
          />
          <UpLoadButton
            type={'button'}
            value={`텍스트 업로드`}
            onClick={() => setUpload({ file: false, text: true })}
            mainPage={true}
          />
        </S.MainPageButtonContainer>
      ) : (
        <TextUpLoad />
      )}
    </S.MainPageContainer>
  );
};
