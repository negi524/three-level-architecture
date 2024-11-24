export default function MypageIndex() {
  return (
    <>
      <h1 className="text-center font-bold text-lg p-9">
        サインイン成功しました
      </h1>
      <div className="text-center">
        <form action="/signout" method="post">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            サインアウト
          </button>
        </form>
      </div>
    </>
  );
}
