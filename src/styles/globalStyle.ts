import { css } from '@emotion/react';

import { reset } from './reset';

export const globalStyle = css`
  ${reset}

  :root {
    --color-background: #282a3a;
    --color-text-primary: #ffffff;
    --color-text-secondary: #25262e;

    --color-check-true-background: #2ab514;
    --color-check-true-icon: var(--color-text-primary);
    --color-check-false-background: var(--color-text-primary);
    --color-check-false-icon: #c0c0c0;

    --color-border: #757bab;
    --color-background-secondary: var(--color-border);
    --color-background-tertiary: #2e2836;
  }
  html {
    font-size: 10px;
  }
  body {
    background: var(--color-background);
    color: var(--color-text-primary);
    font-size: 1.6rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .MainLogoText {
    font-size: 6rem;
    font-weight: 900;
    margin: 20px;
  }
  .MainLogoSubText {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 50px;
  }
`;
