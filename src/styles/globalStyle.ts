import { css } from '@emotion/react';

import { reset } from './reset';

export const globalStyle = css`
  ${reset}

  :root {
    --color-text-primary: #ffffff;
    --color-text-secondary: #25262e;
    --color-text-placeholder: #757575;
    --color-text-filelistbox: #8f95e0;

    --color-backgorund-progressbar: #2d2d2d;

    --color-check-true-background: #2ab514;
    --color-check-true-icon: var(--color-text-primary);
    --color-check-false-background: var(--color-text-primary);
    --color-check-false-icon: #c0c0c0;

    --color-border: #757bab;
    --color-background: #282a3a;
    --color-background-secondary: var(--color-border);
    --color-background-tertiary: #2e2836;
    --color-backgorund-filelistbox: #373d4a;

    --color-button-primary: var(--color-border);
    --color-button-secondary: #aa75ab;
  }
  html {
    font-size: 10px;
  }
  body {
    background: var(--color-background);
    color: var(--color-text-primary);
    letter-spacing: -0.05rem;
    font-size: 1.6rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .MainLogoText {
    font-size: 6rem;
    font-weight: 900;
    margin: 18px;
    margin-top: 50px;
    color: var(--color-text-primary);
  }
  .MainLogoSubText {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 35px;
    color: var(--color-text-primary);
  }
`;
