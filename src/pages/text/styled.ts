import styled from '@emotion/styled';

export const TextPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TextPageButtonSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 3rem;
`;

export const TextFileStatusText = styled.div`
  color: var(--color-text-primary);
  font-size: 2rem;
  font-weight: 600;
  margin: 3rem 0;
`;

export const TextBox = styled.div`
  background-color: var(--color-backgorund-filelistbox);
  color: var(--color-text-tertiary);
  border-radius: 1rem;
  padding: 1.2rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  max-width: 80rem;
  flex-direction: row;
  flex-wrap: wrap;
  word-break: break-all;
  align-items: center;
  font-size: 2.2rem;
`;
