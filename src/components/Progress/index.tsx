import * as S from './styled';

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

export function Progress({ value, files, typing, stateText }: ProgressBarProps) {
  return (
    <S.ProgressContainer>
      <S.ProgressBar width={value} />
      <S.ProgressText>
        {files[0].filename}
        {files.length > 1 ? ` 외 ${files.length - 1}개` : ''}
        &nbsp;
        {stateText}
        {typing}
      </S.ProgressText>
    </S.ProgressContainer>
  );
}
