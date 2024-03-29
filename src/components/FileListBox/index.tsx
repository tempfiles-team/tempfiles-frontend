import { downloadFile } from '../../utils/axios';
import * as S from './styled';

type FileListBoxProps = {
  filename: string;
  size: string;
  downloadUrl: string;
};

export function FileListBox({ filename, size, downloadUrl }: FileListBoxProps) {
  return (
    <S.FileListBoxContainer>
      <div
        onClick={async () => {
          await downloadFile(downloadUrl, filename);
        }}
      >
        {filename} / {size}
      </div>
    </S.FileListBoxContainer>
  );
}
