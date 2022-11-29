import styled from '@emotion/styled';

export const RangeSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 4rem;
  border-radius: 8px;
  background: var(--color-backgorund-black);
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 3.9rem;
    height: 4rem;
    background: var(--color-background-secondary);
    border-radius: 12px;
  }
  /* &::-webkit-fill-upper {
    -webkit-appearance: none;
    appearance: none;
    background: var(--color-slider-upper);
  }
  &::-webkit-fill-lower {
    -webkit-appearance: none;
    appearance: none;
    background: var(--color-slider-lower);
  } */
`;

RangeSlider.defaultProps = { type: 'range' };
