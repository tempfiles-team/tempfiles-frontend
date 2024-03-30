import styled from '@emotion/styled';

export const ButtonContainer = styled.input<{ bgColor: string }>`
  font-size: 2rem;
  font-weight: 700;

  color: var(--color-text-primary);
  background-color: ${(props) => props.bgColor};

  width: fit-content;
  height: 6rem;

  border: 0;
  outline: none;
  border-radius: 0.8rem;

  margin: 0 1rem 0 1rem;
  padding: 0.8rem 1.2rem;
`;

ButtonContainer.defaultProps = { type: 'button' };
