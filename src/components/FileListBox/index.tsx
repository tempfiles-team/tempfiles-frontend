import { getFileSize } from '../../utils';
import { downloadFile } from '../../utils/axios';
import * as S from './styled';

export type FileListBoxProps = {
  filename: string;
  size: number;
  downloadUrl: string;
  downloading: boolean;
  setDownloading: (downloading: boolean) => typeof downloading;
};

export function FileListBox({
  filename,
  size,
  downloadUrl,
  downloading,
  setDownloading,
}: FileListBoxProps) {
  return (
    <S.FileListBoxContainer>
      <div
        onClick={async () => {
          setDownloading(true);
          await downloadFile(downloadUrl, filename);
          setDownloading(false);
        }}
      >
        {filename} / {getFileSize(size)}
        {downloading && size >= 2000_000 ? ' / 다운로드 중...' : ''}
      </div>
    </S.FileListBoxContainer>
  );
}
