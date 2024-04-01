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
`;

export const PreviewContainer = styled.div`
  /* popup 처럼 창 위에 떠 있는다 */
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  background-color: transparent;
  color: var(--color-text-primary);
  border: none;
  cursor: pointer;

  /* 배경색과 상반된 색상 */
  filter: invert(1);
  color: black;
  background-color: white;
  border-radius: 1rem;
`;

export const FileListBoxButton = styled.button`
  background-color: var(--color-button-primary);
  color: var(--color-text-primary);
  border: none;
  border-radius: 50%;
  /* padding: 0.3rem 1rem; */
  font-size: 2.2rem;
  margin-left: 1rem;
  cursor: pointer;
`;
