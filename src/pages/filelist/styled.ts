import styled from '@emotion/styled';

export const FileListContainer = styled.div`
  max-height: 70dvh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FileListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const HideFileIdInput = styled.input`
  padding: 0.8rem 1.2rem;
  border: 0.4rem solid var(--color-border);
  background-color: var(--color-backgorund-black);
  color: var(--color-text-placeholder);
  border-radius: 1rem;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 3rem;

  width: fit-content;

  text-align: center;

  &::-webkit-input-placeholder {
    color: var(--color-text-placeholder);
  }
`;

export const FileListZero = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin: 5rem;
`;
