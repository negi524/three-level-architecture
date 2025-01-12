import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

interface ParamAndQuery {
  paramId: string;
  queryString: string;
}

export const loader = async ({
  request,
  params,
}: LoaderFunctionArgs): Promise<ParamAndQuery> => {
  // データを取得する
  const paramId = params.id ?? '';
  const url = new URL(request.url);
  const query = url.searchParams.get('q') ?? '';
  return {
    paramId: paramId,
    queryString: query,
  };
};

export default function Posts() {
  const parameter = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Posts Page</h1>
      <div>パスパラメータ: {parameter.paramId}</div>
      <div>リクエストパラメータ: {parameter.queryString}</div>
    </div>
  );
}
