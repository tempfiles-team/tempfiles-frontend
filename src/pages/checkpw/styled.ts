import styled from '@emotion/styled';

export const CheckPasswordPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const PasswordInputSection = styled.div`
  display: flex;
  margin: 4rem;
`;

export const CheckPasswordInput = styled.input`
  border: 0.4rem solid var(--color-border);
  border-radius: 1rem;
  outline: none;
  width: 50rem;
  height: 6rem;
  padding-left: 1.2rem;
  font-size: 1.8rem;
  font-weight: 700;
`;
