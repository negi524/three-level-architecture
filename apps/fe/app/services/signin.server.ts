import User from "~/domain/user";

export async function signin(email: string, password: string): Promise<User> {
  // DBに接続してユーザー情報を取得する処理
  return await {
    id: 1,
  };
}
