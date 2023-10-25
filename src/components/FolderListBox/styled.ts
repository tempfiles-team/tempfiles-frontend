import styled from '@emotion/styled';

export const FolderListBoxContainer = styled.div`
  color: var(--color-text-tertiary);
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;

  p {
    display: flex;
    justify-content: center;
  }

  .folderid {
    border-radius: 0.5rem;
    padding: 1.2rem 1.2rem 1.2rem 1.2rem;
    margin-right: 1rem;
    background-color: var(--color-backgorund-filelistbox);
    color: var(--color-text-primary);
  }
`;
