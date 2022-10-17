import styled from '@emotion/styled';

export const ButtonContainer = styled.input<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  border-radius: 8px;
  outline: none;
  font-size: 2rem;
  font-weight: 700;
  width: 14rem;
  height: 6rem;
  border: 0;
  color: var(--color-text-primary);
  margin: 0px 10px 0px 10px;
`;

ButtonContainer.defaultProps = { type: 'button' };
