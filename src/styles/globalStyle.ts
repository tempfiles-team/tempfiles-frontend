import { css } from '@emotion/react';

import { reset } from './reset';

export const globalStyle = css`
  ${reset}

  :root {
    --color-text-primary: #ffffff;
    --color-text-secondary: #25262e;
    --color-text-tertiary: #8f95e0;
    --color-text-placeholder: #c8beac;

    --color-backgorund-progressbar: #2d2d2d;

    --color-check-true-background: #252728;
    --color-check-true-icon: var(--color-text-primary);
    --color-check-false-background: #252728;
    --color-check-false-icon: #252728;

    --color-border: #757bab;
    --color-background: #282a3a;
    --color-backgorund-black: #252728;
    --color-background-secondary: var(--color-border);
    --color-background-tertiary: #2e2836;
    --color-background-apicommand: #373c62cc;
    --color-backgorund-filelistbox: #373d4a;

    --color-button-primary: var(--color-border);
    --color-button-secondary: #aa75ab;

    --small-mobile-breakpoint: 575px;
    --mobile-breakpoint: 767px;
    --tablet-breakpoint: 991px;
    --desktop-breakpoint: 1200px;
  }
  html {
    text-size-adjust: 100%;
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
    margin: 1.8rem;
    margin-top: 5rem;
    color: var(--color-text-primary);
  }
  .MainLogoSubText {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3.5rem;
    color: var(--color-text-primary);
  }
`;
