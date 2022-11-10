import styled from '@emotion/styled';

export const FileFindContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FileFindTextBox = styled.div`
  border: 4px solid var(--color-border);
  border-radius: 10px;
  width: 45rem;
  height: 4.2rem;
  background-color: var(--color-backgorund-black);
  color: var(--color-text-placeholder);
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 1.8rem;
  font-weight: 700;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FileFindButton = styled.label`
  background-color: var(--color-background-secondary);
  width: 10rem;
  height: 4.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-primary);
  font-size: 2rem;
  font-weight: 700;
  border-radius: 10px;
  margin-left: 10px;
`;
