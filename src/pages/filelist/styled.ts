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

export const FileListSkeletonUI = styled.div<{ randomWitdh: string }>`
  display: flex;
  background-color: var(--color-backgorund-filelistbox);
  border-radius: 10px;
  margin-bottom: 1.5rem;
  min-height: 4.6rem;
  min-width: ${(props) => props.randomWitdh}rem;
  overflow: hidden;
  &::before {
    content: ' ';
    width: 100%;
    height: auto;
    animation: loading 2s infinite;
    box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.3);
  }
  @keyframes loading {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translate(200%);
    }
  }
`;
