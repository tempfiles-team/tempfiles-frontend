import * as S from './styled';

type FolderListBoxProps = {
  folderId: string;
  fileCount: string;
  uploadDate: string;
  isEncrypted: boolean;
  click: () => void;
};

export function FolderListBox({
  folderId,
  fileCount,
  uploadDate,
  isEncrypted,
  click,
}: FolderListBoxProps) {
  return (
    <S.FolderListBoxContainer onClick={click}>
      {isEncrypted ? '🔒' : '🔓'} <div className="folderid">{folderId}</div>에 {fileCount}개의 파일{' '}
      {uploadDate}에 업로드 됨
    </S.FolderListBoxContainer>
  );
}
