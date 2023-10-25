import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { bindActionCreators } from 'redux';
import { FolderListBox, Button, SkeletonUI, PasswordInput } from '../../components';
import { actionCreators } from '../../state';
import { getDate } from '../../utils';
import * as S from './styled';

export function CheckPasswordPage() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [passwordFilter, setPasswordFilter] = useState(true);
  const { checkfolderid } = useParams<{ checkfolderid: string }>();
  const [folderProps, setFolderProps] = useState({
    folderId: '',
    fileCount: '',
    uploadDate: '',
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
          `${import.meta.env.VITE_APP_BACKEND_BASEURL}/checkpw/${checkfolderid}?pw=${password}`
        );
        SetDownloadFileProps({
          isEncrypted: true,
          token: res.data.token,
        });
        navigate(`/dl/${checkfolderid}`);
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
    const getFolderProps = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_BACKEND_BASEURL}/file/${checkfolderid}`
        );
        setLoading(false);
        setFolderProps({
          folderId: res.data.folderId,
          fileCount: res.data.files.length,
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
    getFolderProps();
  }, [checkfolderid, navigate]);

  return (
    <S.CheckPasswordPageContainer>
      {!loading ? (
        <>
          <FolderListBox
            key={folderProps.folderId}
            folderId={folderProps.folderId}
            fileCount={folderProps.fileCount}
            uploadDate={getDate(folderProps.uploadDate)}
            isEncrypted={true}
            click={() => {}}
          />
          <div className="input-box">
            <PasswordInput
              type={passwordFilter ? 'password' : 'text'}
              setPassword={setPassword}
              setPasswordFilter={setPasswordFilter}
              placeholder="비밀번호를 입력해주세요."
              isFillter={passwordFilter}
              action={passwordCheck}
            />

            <Button
              click={() => {
                passwordCheck();
              }}
              bgColor="var(--color-button-primary)"
              label="전송"
            />
          </div>
        </>
      ) : (
        <>
          <SkeletonUI width="80rem" height="4.6rem" margin="0rem" />
          <SkeletonUI width="66rem" height="6rem" margin="4rem" />
        </>
      )}
    </S.CheckPasswordPageContainer>
  );
}
