import styled from '@emotion/styled';
//나중에 loading애니메이션 변수화하기
export const SkeletonUIBox = styled.div<{ randomWitdh: string }>`
  display: flex;
  background-color: var(--color-backgorund-filelistbox);
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  min-height: 4.6rem;
  min-width: ${(props) => props.randomWitdh}rem;
  overflow: hidden;
  &::before {
    content: ' ';
    width: 100%;
    height: auto;
    animation: loading 2s infinite;
    box-shadow: 0 0 3rem 3rem rgba(255, 255, 255, 0.3);
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
export const SkeletonUIApiBox = styled(SkeletonUIBox)`
  min-height: 6.2rem;
  margin: 1rem;
`;

export const SkeletonUI = styled.div<{
  width: string;
  height: string;
  margin: string;
}>`
  display: flex;
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background: var(--color-backgorund-filelistbox);
  border-radius: 1rem;
  overflow: hidden;
  &::before {
    content: ' ';
    width: 100%;
    height: auto;
    animation: loading 2s infinite;
    box-shadow: 0 0 3rem 3rem rgba(255, 255, 255, 0.3);
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
