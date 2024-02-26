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
    <div
      onClick={click}
      className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-md cursor-pointer"
    >
      {isHidden ? '🔒' : ''} {folderId} {fileCount}개의 파일 / {uploadElapsed}에 업로드 됨
    </div>
  );
}
