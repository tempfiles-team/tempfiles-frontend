import * as S from './styled';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export function ApiPage() {
  return (
    <S.ApiPageContainer>
      <S.ScrollBox>
        <SwaggerUI url={import.meta.env.VITE_APP_BACKEND_BASEURL + '/swagger/openapi.json'} />
      </S.ScrollBox>
    </S.ApiPageContainer>
  );
}
