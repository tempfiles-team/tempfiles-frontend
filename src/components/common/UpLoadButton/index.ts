import styled from '@emotion/styled';

export const UpLoadButton = styled.input<{ mainPage?: boolean }>`
  outline: none;
  border-radius: ${({ mainPage }) => (mainPage ? '1.2rem' : '1.5rem')};
  border: 0;
  width: ${({ mainPage }) => (mainPage ? '18rem' : '15rem')};
  height: ${({ mainPage }) => (mainPage ? '6rem' : '5rem')};
  font-size: 2rem;
  font-weight: 900;
  background-color: var(--color-background-secondary);
  margin-top: 3rem;
  color: var(--color-text-primary);
  text-align: center;
`;
