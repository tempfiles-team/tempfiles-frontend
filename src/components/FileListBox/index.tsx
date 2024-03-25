import { Card } from '@/components/ui/card';
import { downloadFile } from '@/lib/axios';
import { useState } from 'react';

type FileListBoxProps = {
  filename: string;
  size: string;
  downloadUrl: string;
};

export function FileListBox({ filename, size, downloadUrl }: FileListBoxProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleFileDownload = async () => {
    setIsDownloading(true);

    await downloadFile(downloadUrl, filename);

    setIsDownloading(false);
  };

  return (
    <Card onClick={handleFileDownload} className="cursor-pointer p-4 flex justify-between gap-4">
      <div>{filename}</div>
      <div>{size}</div>
      {isDownloading && '다운로드 중...'}
    </Card>
  );
}
