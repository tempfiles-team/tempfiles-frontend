import styled from '@emotion/styled';

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainPageCheckBoxSection = styled.div`
  display: flex;
`;

export const MainPageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 5rem;
`;

export const MainPageButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5rem;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;
