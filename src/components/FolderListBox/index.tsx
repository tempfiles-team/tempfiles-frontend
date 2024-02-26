import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
    <Card onClick={click} className={cn('cursor-pointer py-4 px-6')}>
      {isHidden ? '🔒' : ''} {folderId} {fileCount}개의 파일 / {uploadElapsed}에 업로드 됨
    </Card>
  );
}
