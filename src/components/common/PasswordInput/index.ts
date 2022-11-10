import styled from '@emotion/styled';

export const PasswordInput = styled.input`
  border: 4px solid var(--color-border);
  background-color: var(--color-backgorund-black);
  color: var(--color-text-placeholder);
  border-radius: 10px;
  outline: none;
  width: 100%;
  height: 5rem;
  padding-left: 12px;
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 20px;
  &::-webkit-input-placeholder {
    color: var(--color-text-placeholder);
  }
`;
