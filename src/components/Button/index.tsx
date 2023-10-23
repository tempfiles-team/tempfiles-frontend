import * as S from './styled';

type ButtonProps = {
  bgColor: string;
  label: string;
  click: () => void;
};

export function Button({ bgColor, label, click }: ButtonProps) {
  return <S.ButtonContainer bgColor={bgColor} value={label} onClick={click} />;
}
