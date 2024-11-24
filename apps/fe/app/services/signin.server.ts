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
  console.log({ username, password });
  try {
    const response = await fetch('http://be:3020/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        password: password,
      }),
    });

    if (!response.ok) {
      console.error('エラーが発生しました', response.statusText);
      throw new Error(`エラーが発生しました\t${response.statusText}`);
    }

    return (await response.json()) as User;
  } catch (error) {
    console.error('エラーが発生しました', error);
    throw new Error(`エラーが発生しました\t${error}`);
  }
}
