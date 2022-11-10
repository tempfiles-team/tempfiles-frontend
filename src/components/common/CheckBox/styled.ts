import styled from '@emotion/styled';

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4rem;
`;

export const CheckBoxObject = styled.div<{ isCheck: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.5rem;
  margin: 0.5rem 1.2rem 0.5rem 0.5rem;
  border-radius: 0.3rem;
  background-color: ${(props) =>
    props.isCheck ? 'var(--color-check-true-background)' : 'var(--color-check-false-background)'};
`;

export const CheckBoxText = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
