import styled from '@emotion/styled';

export const ExpireTimeContainer = styled.div`
  width: 70%;
  max-width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const ExpireTimeText = styled.div`
  flex: 1 1 auto;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 0.4rem;
  background: var(--color-backgorund-black);
`;

export const ExpireTimeButton = styled.div`
  padding: 0 1rem 0 1rem;
  margin: 0 0.5rem 0 0.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-text-primary);
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-secondary);
  border-radius: 0.8rem;
  cursor: pointer;
`;
