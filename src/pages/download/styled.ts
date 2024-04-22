import styled from '@emotion/styled';

export const IdBox = styled.div`
  background-color: var(--color-backgorund-filelistbox);
  color: var(--color-text-primary);
  border-radius: 1rem;
  padding: 1.2rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

export const DownloadPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const DownloadFileListBoxContainer = styled.div`
  max-height: 50dvh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DownloadPageButtonSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 3rem;
`;

export const DownloadFileStatusText = styled.div`
  color: var(--color-text-primary);
  font-size: 2rem;
  font-weight: 600;
  margin-top: 3rem;
`;
