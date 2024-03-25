import { Progress } from '@/components/ui/progress';

type ProgressBarProps = {
  value: number;
  files: {
    filename: string;
    size: string;
    fileType: string;
    fileData: File | null;
  }[];
  typing: string;
  stateText: string;
};

export function ProgressA({ value, files, typing, stateText }: ProgressBarProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Progress value={value} />
      <p>
        {files[0].filename}
        {files.length > 1 ? ` 외 ${files.length - 1}개` : ''}
        &nbsp;
        {stateText}
        {typing}
      </p>
    </div>
  );
}
