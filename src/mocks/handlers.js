// graphql을 이용하려면, graphql을 꺼내오면 된다.
// 현재 여기서는 restAPI로 실습하기 위해 rest를 꺼내왔다.
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(import.meta.env.VITE_APP_BACKEND_BASEURL, () => {
    return HttpResponse.json({ message: 'This is a mocked response' });
  }),
];
