import styled from '@emotion/styled';

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
