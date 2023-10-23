import CheckIcon from '../../assets/CheckIcon.svg';
import * as S from './styled';

type CheckBoxProps = {
  click: React.MouseEventHandler<HTMLDivElement>;
  isCheck: boolean;
  label: string;
};

export function CheckBox({ click, isCheck, label }: CheckBoxProps) {
  return (
    <S.CheckBoxContainer>
      <S.CheckBoxObject onClick={click} isCheck={isCheck}>
        <img src={CheckIcon} alt="check icon" />
      </S.CheckBoxObject>
      <S.CheckBoxText>{label}</S.CheckBoxText>
    </S.CheckBoxContainer>
  );
}
