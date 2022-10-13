import styled from '@emotion/styled';

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

export const CheckBoxObject = styled.div<{ isCheck: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  padding: 5px;
  margin: 5px 12px 5px 5px;
  border-radius: 3px;
  background-color: ${(props) =>
    props.isCheck ? 'var(--color-check-true-background)' : 'var(--color-check-false-background)'};
`;

export const CheckBoxText = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
