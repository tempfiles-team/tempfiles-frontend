import styled from '@emotion/styled';

export const RootLayout = styled.div`
  .BetaBanner {
    width: 100vw;
    padding: 2rem;
    background-color: #757bab;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .RootWrapper {
    width: 100%;
    flex-grow: 2;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  width: 100dvw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoText = styled.div`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 3.5rem;
  color: var(--color-text-primary);
  margin-top: 45dvh;
`;
