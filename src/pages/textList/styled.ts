import styled from '@emotion/styled';

export const TextileListPageContainer = styled.div`
  max-height: 40rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TextListPageBoxShadow = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;
  top: -2.5rem; //-25px
  background: linear-gradient(180deg, rgba(40, 42, 58, 0) 0%, #282a3a 45.31%);
`;

export const TextListZero = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin: 5rem;
`;

export const TextListBoxContainer = styled.div`
  background-color: var(--color-backgorund-filelistbox);
  color: var(--color-text-tertiary);
  border-radius: 1rem;
  padding: 1.2rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;
