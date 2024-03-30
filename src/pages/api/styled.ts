import styled from '@emotion/styled';

export const ScrollBox = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 60svh;
  display: flex;
  justify-content: center;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ApiPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100dvw;

  .swagger-ui {
    width: 100%;

    * {
      color: white;

      p {
        color: var(--color-text-tertiary);
      }

      input,
      select.content-type {
        background-color: var(--color-backgorund-filelistbox);
        color: var(--color-text-tertiary);
      }
    }

    .info {
      margin-top: 0;
    }

    .title {
      color: white;
    }

    .opblock-summary-description {
      color: var(--color-text-tertiary);
    }

    .opblock-section-header {
      background-color: var(--color-backgorund-filelistbox);
      color: var(--color-text-tertiary);
      font-size: 2.2rem;
      font-weight: 700;

      h4 {
        color: var(--color-text-tertiary);
      }
    }
  }
`;
