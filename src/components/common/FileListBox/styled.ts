import styled from '@emotion/styled';

export const FileListBoxContainer = styled.div`
  background-color: var(--color-backgorund-filelistbox);
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

  img {
    width: 2.3rem;
    margin-right: 0.5rem;
  }

  .middle,
  .short {
    display: none;

    p {
      display: flex;
      justify-content: center;
      margin-bottom: 0.6rem;
      margin-top: 0.6rem;
    }
  }

  @media screen and (max-width: 1100px) {
    .long {
      display: none;
    }

    .middle {
      display: block;
      p {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .middle {
      display: none;
    }

    .short {
      display: block;
    }
  }
`;
