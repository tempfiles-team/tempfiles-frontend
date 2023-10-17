import styled from '@emotion/styled';

export const ApiPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ApiListSection = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 40rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ApiListBox = styled.div`
  background-color: var(--color-backgorund-filelistbox);
  color: var(--color-text-tertiary);
  border-radius: 1rem;
  padding: 2rem 1.4rem 2rem 1.4rem;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2.2rem;
  font-weight: 700;
  cursor: pointer;
`;
