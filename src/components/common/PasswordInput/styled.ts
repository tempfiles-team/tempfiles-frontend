import styled from '@emotion/styled';

export const PasswordInputContainer = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Input = styled.input`
  position: absolute;
  z-index: 1;
  border: 0.4rem solid var(--color-border);
  background-color: var(--color-backgorund-black);
  color: var(--color-text-placeholder);
  border-radius: 1rem;
  outline: none;
  width: 100%;
  height: 100%;
  padding-left: 1.2rem;
  font-size: 1.8rem;
  font-weight: 700;

  &::-webkit-input-placeholder {
    color: var(--color-text-placeholder);
  }
`;
