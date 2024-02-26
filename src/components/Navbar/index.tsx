// import * as S from './styled';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Navbar() {
  return (
    // <S.NavbarContainer>
    //   <S.Nav to={'/'}>Upload</S.Nav>
    //   <S.Nav to={'/api'}>API</S.Nav>
    //   <S.Nav to={'/list'}>File list</S.Nav>
    // </S.NavbarContainer>

    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}
