import { Card } from '@/components/ui/card';
import axios from 'axios';
import { useState } from 'react';

type FileListBoxProps = {
  filename: string;
  size: string;
  downloadUrl: string;
};

export function FileListBox({ filename, size, downloadUrl }: FileListBoxProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleFileDownload = () => {
    setIsDownloading(true);
    const fileUrl = import.meta.env.VITE_APP_BACKEND_BASEURL + downloadUrl;

    axios
      .get(fileUrl, { responseType: 'blob' })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        setIsDownloading(false);
      })
      .catch((error) => {
        console.error('파일 다운로드 오류:', error);
        setIsDownloading(false);
      });
  };

  return (
    <Card onClick={handleFileDownload} className="cursor-pointer p-4 flex justify-between gap-4">
      <div>{filename}</div>
      <div>{size}</div>
      {isDownloading && '다운로드 중...'}
    </Card>
  );
}
