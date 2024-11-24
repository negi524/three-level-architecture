import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import User from '~/domain/user';
import { authenticator } from '~/services/auth.server';

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const signinUser: User | null = await authenticator.isAuthenticated(request);
  const response = await fetch(`http://be:3020/users/${signinUser?.id}`);
  const user = (await response.json()) as User;
  return user;
};
export default function MypageIndex() {
  const user = useLoaderData() as User;
  return (
    <>
      <h1 className="text-center font-bold text-lg p-9">
        サインイン成功しました
      </h1>
      <table className="m-auto border-collapse border border-slate-400 mb-7">
        <thead>
          <tr>
            <th className="border border-slate-300">id</th>
            <th className="border border-slate-300">name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300">{user.id}</td>
            <td className="border border-slate-300">{user.name}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <form action="/signout" method="post">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            サインアウト
          </button>
        </form>
      </div>
    </>
  );
}
