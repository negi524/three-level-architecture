import { createCookieSessionStorage } from "@remix-run/node";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'strict',
    path: '/',
    httpOnly: true,
    secrets: ['s3cr3t'],
    secure: true
  }
})

export const { getSession, commitSession, destroySession } = sessionStorage;
