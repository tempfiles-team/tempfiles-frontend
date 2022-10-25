import styled from '@emotion/styled';

export const FileListPageContainer = styled.div`
  max-height: 40rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FileListPageBoxShoadow = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;
  top: -25px;
  background: linear-gradient(180deg, rgba(40, 42, 58, 0) 0%, #282a3a 45.31%);
`;
