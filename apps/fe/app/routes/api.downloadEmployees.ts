/**
 * 従業員検索用のプロキシAPI
 * @param リクエストパラメータ
 * @returns プロキシAPIのレスポンス
 */
export const loader = async (): Promise<Response> => {
  // BEのレスポンスをそのまま返却する
  return fetch('http://be:3020/employee/download');
};
