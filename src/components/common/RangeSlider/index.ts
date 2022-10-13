import styled from '@emotion/styled';

export const RangeSlider = styled.input`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 4rem;
  border-radius: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  //Chrome, Safari, Opera, and Edge Chromium
  &::-ms-fill-lower {
    background-color: var(--color-background-secondary);
  }
  &::-ms-fill-upper {
    background-color: var(--color-background-tertiary);
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--color-text-primary);
    height: 2rem;
    width: 1rem;
    border-radius: 4px;
  }
  //Firefox
  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--color-text-primary);
    height: 2rem;
    width: 1rem;
    border-radius: 4px;
  }
`;

RangeSlider.defaultProps = { type: 'range' };
