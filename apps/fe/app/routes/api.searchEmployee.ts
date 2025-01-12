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
  const url = new URL(request.url);
  const nameQuery = url.searchParams.get('name') ?? '';
  const response = await fetch(`http://be:3020/employee?name=${nameQuery}`);
  return response.json();
};
