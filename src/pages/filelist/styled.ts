import styled from '@emotion/styled';

export const FileListPageContainer = styled.div`
  max-height: 70dvh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FileListZero = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin: 5rem;
`;
