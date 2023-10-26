import * as S from './styled';

type FolderListBoxProps = {
  folderId: string;
  fileCount: string;
  uploadElapsed: string;
  isHidden: boolean;
  click: () => void;
};

export function FolderListBox({
  folderId,
  fileCount,
  uploadElapsed,
  isHidden,
  click,
}: FolderListBoxProps) {
  return (
    <S.FolderListBoxContainer onClick={click}>
      <div className="folderid">
        {isHidden ? '🔒' : ''} {folderId}
      </div>
      {fileCount}개의 파일 / {uploadElapsed}에 업로드 됨
    </S.FolderListBoxContainer>
  );
}
