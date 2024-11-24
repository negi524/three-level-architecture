import { ActionFunction, ActionFunctionArgs, redirect } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export async function action({
  request,
}: ActionFunctionArgs): Promise<ActionFunction> {
  return await authenticator.logout(request, { redirectTo: "/" });
}

export async function loader() {
  return redirect("/");
}

export function SignoutIndex() {}
