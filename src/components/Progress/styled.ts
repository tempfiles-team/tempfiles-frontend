import styled from '@emotion/styled';

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProgressBar = styled.div<{ width: number }>`
  display: flex;
  background: var(--color-backgorund-progressbar);
  border-radius: 0.5rem;
  width: 90%;
  height: 3rem;

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
