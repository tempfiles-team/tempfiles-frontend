import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Button } from '../../components';
import * as S from './styled';

export function DeletePage() {
  const navigate = useNavigate();

  const { folderid } = useParams<{ folderid: string }>();

  const deleteFile = async () => {
    await axios({
      method: 'delete',
      url: `${import.meta.env.VITE_APP_BACKEND_BASEURL}/del/${folderid}`,
    })
      .then(() => {
        navigate('/');
        toast.success('삭제 완료', {
          duration: 3000,
          icon: '🗑️',
        });
      })
      .catch((err) => {
        toast.error(`삭제 실패 ${err.response.status}`, {
          duration: 3000,
          icon: '🗑️',
        });
      });
  };

  return (
    <S.DeletePageContainer>
      <S.DeletePagePageLabel>업로드된 파일을 서버에서 삭제하시겠습니까?</S.DeletePagePageLabel>
      <S.DeletePageButtonSection>
        <Button bgColor="var(--color-button-primary)" label="확인" click={deleteFile} />
        <Button bgColor="var(--color-button-primary)" label="취소" click={() => navigate(-1)} />
      </S.DeletePageButtonSection>
    </S.DeletePageContainer>
  );
}
