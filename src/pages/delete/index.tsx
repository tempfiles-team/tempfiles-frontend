import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';

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
    <div className="flex flex-col items-center justify-center gap-4">
      <p>업로드된 파일을 서버에서 삭제하시겠습니까?</p>
      <div className="flex flex-row items-center justify-center gap-1">
        <Button onClick={deleteFile} className="bg-red-700">
          삭제
        </Button>
        <Button onClick={() => navigate(-1)}>취소</Button>
      </div>
    </div>
  );
}
