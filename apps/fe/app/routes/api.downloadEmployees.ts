/**
 * 従業員検索用のプロキシAPI
 * @param リクエストパラメータ
 * @returns プロキシAPIのレスポンス
 */
export const loader = async (): Promise<Response> => {
  // BEにリクエストするURLを組み立て
  const backendRequestUrl = new URL('http://be:3020/employee/download');

  // BEのレスポンスをそのまま返却する
  return fetch(backendRequestUrl);
};
