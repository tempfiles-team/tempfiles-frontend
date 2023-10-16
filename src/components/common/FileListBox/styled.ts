import styled from '@emotion/styled';

export const FileListBoxContainer = styled.div`
  background-color: var(--color-backgorund-filelistbox);
  color: var(--color-text-tertiary);
  border-radius: 1rem;
  padding: 1.2rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;

  img {
    width: 2.3rem;
    margin-right: 0.5rem;
  }

  .short {
    display: none;
  }


  @media screen and (max-width: 1100px) {
    .long {
      display: none;
    }

    .short {
      display: block;
      p {
        display: flex;
        justify-content: center;
      }
    }
  }
`;
