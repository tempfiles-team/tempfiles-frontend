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

export const FileListPageBoxShadow = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;
  top: -2.5rem; //-25px
  background: linear-gradient(180deg, rgba(40, 42, 58, 0) 0%, #282a3a 45.31%);
`;

export const FileListZero = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin: 5rem;
`;
