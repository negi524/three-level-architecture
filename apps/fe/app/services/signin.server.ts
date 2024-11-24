import User from '~/domain/user';

/**
 * ユーザー名とパスワードでサインインを行う
 * @param username ユーザー名
 * @param password パスワード
 * @returns ユーザー情報
 */
export async function signin(
  username: string,
  password: string,
): Promise<User> {
  // DBに接続してユーザー情報を取得する処理
  return await {
    id: 1,
  };
}
