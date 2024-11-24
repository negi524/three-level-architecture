import { createCookieSessionStorage } from '@remix-run/node';

// TODO: ログイン失敗時にセッションを発行しないようにする
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'strict',
    path: '/',
    httpOnly: true,
    secrets: ['s3cr3t'], // TODO: 環境変数からsecretを設定する
    secure: true,
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;
