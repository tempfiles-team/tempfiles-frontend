import styled from '@emotion/styled';

export const RootLayout = styled.div`
  .RootWrapper {
    width: 100%;
    height: fit-content;
  }

  .Text {
    font-size: 6rem;
    font-weight: 900;
    margin: 1.8rem;
    margin-top: 5rem;
    color: var(--color-text-primary);
  }

  .SubText {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3.5rem;
    color: var(--color-text-primary);
  }

  .LinkBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
