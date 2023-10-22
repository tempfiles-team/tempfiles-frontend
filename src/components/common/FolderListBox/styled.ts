import styled from '@emotion/styled';

export const FolderListBoxContainer = styled.div`
  background-color: var(--color-backgorund-folderlistbox);
  color: var(--color-text-tertiary);
  border-radius: 1rem;
  padding: 1.2rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;

  p {
    display: flex;
    justify-content: center;
    margin-bottom: 0.6rem;
    margin-top: 0.6rem;
  }

  .folderid {
    /* 강조 상자 */
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    margin-right: 0.5rem;

    background-color: #f5f5f5;
  }
`;
