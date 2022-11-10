import styled from '@emotion/styled';

export const ButtonContainer = styled.input<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  border-radius: 0.8rem;
  outline: none;
  font-size: 2rem;
  font-weight: 700;
  width: 14rem;
  height: 6rem;
  border: 0;
  color: var(--color-text-primary);
  margin: 0px 1rem 0px 1rem;
`;

ButtonContainer.defaultProps = { type: 'button' };
