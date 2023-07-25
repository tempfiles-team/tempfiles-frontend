import styled from '@emotion/styled';

export const TextUpLoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 4rem;
`;

export const TextUploadCheckBoxSection = styled.div`
  display: flex;
`;

export const TextUploadInput = styled.input`
  border: 0.4rem solid var(--color-border);
  border-radius: 1rem;
  width: 45rem;
  height: 5rem;
  background-color: var(--color-backgorund-black);
  color: var(--color-text-placeholder);
  display: flex;
  padding: 0 1.2rem;
  font-size: 1.8rem;
  font-weight: 700;
  /* margin-top: 4rem; */
  outline: none;
`;
