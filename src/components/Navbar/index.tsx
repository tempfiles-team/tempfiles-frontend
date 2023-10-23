import * as S from './styled';

export function Navbar() {
  return (
    <S.NavbarContainer>
      <S.Nav to={'/'}>Upload</S.Nav>
      <S.Nav to={'/api'}>API</S.Nav>
      <S.Nav to={'/list'}>File list</S.Nav>
    </S.NavbarContainer>
  );
}
