import { LoaderFunctionArgs } from '@remix-run/node';
import { Employee } from '~/domain/employee';

/**
 * 従業員検索用のプロキシAPI
 * @param リクエストパラメータ
 * @returns プロキシAPIのレスポンス
 */
export const loader = async ({
  request,
}: LoaderFunctionArgs): Promise<Employee> => {
  // リクエスト情報を取得
  const url = new URL(request.url);
  const nameQuery = url.searchParams.get('name') ?? '';

  // BEにリクエストするURLを組み立て
  const backendRequestUrl = new URL('http://be:3020/employee');
  backendRequestUrl.searchParams.set('name', nameQuery);

  const response = await fetch(backendRequestUrl);
  return response.json();
};
