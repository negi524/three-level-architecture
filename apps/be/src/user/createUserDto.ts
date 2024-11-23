export default class CreateUserDto {
  constructor(
    /**
     * ユーザー名
     */
    public name: string,
    /**
     * 入力パスワード
     */
    public password: string,
  ) {}
}
