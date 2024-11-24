import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";
import User from "~/domain/user";
import { FormStrategy } from "remix-auth-form";
import { signin } from "./signin.server";

export const authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("username");
    const password = form.get("password");
    const user = await signin(String(email), String(password));
    return user;
  }),
  "user-pass",
);
