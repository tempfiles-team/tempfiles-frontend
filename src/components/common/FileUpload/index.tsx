import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { bindActionCreators } from 'redux';

import { uploadState } from '../../../atom';
import { actionCreators } from '../../../state';
import { getFileSize, getTime } from '../../../utils';
import { CheckBox } from '../CheckBox';
import { DownloadCountSlider } from '../DownLoadCountSlider';
import { ExpireTime } from '../ExpireTime';
import { FileFind } from '../FileFind';
import { PasswordInput } from '../PasswordInput';
import { UpLoadButton } from '../UpLoadButton';
import * as S from './styled';

export const FileUpload: React.FC = () => {
  const setUpload = useSetRecoilState(uploadState);

  const [expireTimeBoolean, setExpireTimeBoolean] = useState(false);
  const [downloadCountBoolean, setDownloadCountBoolean] = useState(false);
  const [passwordBoolean, setPasswordBoolean] = useState(false);
  const [passwordFilter, setPasswordFilter] = useState(true);

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
    event.preventDefault();
    setFileProps({
      filename: event.target.files[0].name,
      size: getFileSize(event.target.files[0].size),
      fileType:
        event.target.files[0].type === '' ? 'application/actet-stream' : event.target.files[0].type,
      fileData: event.target.files[0],
    });
  };

  const handleDrop = function (event: any) {
    event.preventDefault();
    setFileProps({
      filename: event.dataTransfer.files[0].name,
      size: getFileSize(event.dataTransfer.files[0].size),
      fileType:
        event.dataTransfer.files[0].type === ''
          ? 'application/actet-stream'
          : event.dataTransfer.files[0].type,
      fileData: event.dataTransfer.files[0],
    });
  };
  const dragOver = (event: any) => {
    event.preventDefault();
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
      })
        .then(async (res) => {
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
  };
  return (
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
        <DownloadCountSlider downloadCount={downloadCount} setDownloadCount={setDownloadCount} />
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
        handleDrop={handleDrop}
        handleDragOver={dragOver}
        handleChangeFile={handleChangeFile}
        fileProps={fileProps}
      />
      <div>
        <UpLoadButton
          type={'button'}
          value={'← 뒤로가기'}
          onClick={() => setUpload({ file: false, text: false })}
          style={{ marginRight: '4rem' }}
        />
        <UpLoadButton type={'button'} value={'업로드'} onClick={UpLoad} />
      </div>
    </>
  );
};
