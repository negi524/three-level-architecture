export default function SuccessIndex() {
  return (
    <>
      <div>ログイン成功しました</div>
      <div>
        <form action="/logout" method="post">
          <button type="submit">サインアウト</button>
        </form>
      </div>
    </>
  );
}
