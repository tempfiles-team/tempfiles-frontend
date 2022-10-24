import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';

import { CheckBox, PasswordInput, UpLoadButton, FileFind } from '../../components';
import { actionCreators } from '../../state';
import { getFileSize } from '../../utils';
import * as S from './styled';

export const MainPage: React.FC = () => {
  const [retentionPeriod, setRetentionPeriod] = useState(false);
  const [downloadCount, setDownloadCount] = useState(false);
  const [passwordBoolean, setPasswordBoolean] = useState(false);
  const [fileProps, setFileProps] = useState({ name: '', size: '', fileType: '', fileData: '' });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { SetSusccesFileProps } = bindActionCreators(actionCreators, dispatch);

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
        url: 'https://tfb.minpeter.cf/upload',
        data: formdata,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(async (res) => {
          console.log(res);
          toast.success('업로드 성공!', {
            autoClose: 3000,
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          SetSusccesFileProps({
            name: res.data.filename,
            size: getFileSize(res.data.size),
            fileType: res.data.filetype,
            expiresAt: res.data.expires,
            deleteUrl: res.data.delete_url,
          });
          navigate('/success');
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
    <S.MainPageContainer>
      <S.MainPageCheckBoxSection>
        <CheckBox
          click={() => setRetentionPeriod(!retentionPeriod)}
          isCheck={retentionPeriod}
          label={'유지기간'}
        />
        <CheckBox
          click={() => setDownloadCount(!downloadCount)}
          isCheck={downloadCount}
          label={'다운로드 횟수'}
        />
        <CheckBox
          click={() => setPasswordBoolean(!passwordBoolean)}
          isCheck={passwordBoolean}
          label={'비밀번호'}
        />
      </S.MainPageCheckBoxSection>
      {passwordBoolean ? <PasswordInput placeholder="비밀번호를 입력해주세요." /> : <></>}
      <FileFind handleChangeFile={handleChangeFile} fileProps={fileProps} />
      <UpLoadButton type={'button'} value={'업로드'} onClick={UpLoad} />
    </S.MainPageContainer>
  );
};
