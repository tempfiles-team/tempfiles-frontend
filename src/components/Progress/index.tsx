import * as S from './styled';

type ProgressBarProps = {
  value: number;
  fileName: string;
  typing: string;
  stateText: string;
};

export function Progress({ value, fileName, typing, stateText }: ProgressBarProps) {
  return (
    <S.ProgressContainer>
      <S.ProgressBar width={value} />
      <S.ProgressText>
        {fileName} {stateText}
        {typing}
      </S.ProgressText>
    </S.ProgressContainer>
  );
}
