import * as S from './styled';

type FileListBoxProps = {
  filename: string;
  size: string;
  downloadUrl: string;
};

export function FileListBox({ filename, size, downloadUrl }: FileListBoxProps) {
  return (
    <S.FileListBoxContainer>
      <div onClick={() => window.open(downloadUrl, '_blank', 'noopener')}>
        {filename} / {size}
      </div>
    </S.FileListBoxContainer>
  );
}
