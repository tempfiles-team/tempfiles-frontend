import styled from '@emotion/styled';

export const PasswordInput = styled.input`
  border: 0.4rem solid var(--color-border);
  background-color: var(--color-backgorund-black);
  color: var(--color-text-placeholder);
  border-radius: 1rem;
  outline: none;
  width: 100%;
  height: 5rem;
  padding-left: 1.2rem;
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 2rem;
  &::-webkit-input-placeholder {
    color: var(--color-text-placeholder);
  }
`;
