import styled from '@emotion/styled';

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProgressBar = styled.div<{ width: number }>`
  display: flex;
  min-width: 70rem;
  min-height: 5.6rem;
  background: var(--color-backgorund-progressbar);
  border-radius: 1.5rem;
  overflow: hidden;
  &::before {
    content: ' ';
    transition: all 1s;
    width: ${(props) => props.width}%;
    height: auto;
    border-radius: 1.5rem;
    background: #373c62;
  }
`;

export const ProgressText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 2rem;
`;

export const ProgressAnimationBox = styled.div`
  width: 20rem;
  height: 20rem;
  overflow: hidden;
  margin-bottom: 1rem;
`;
