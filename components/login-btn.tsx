import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        次のユーザーでログイン中： {session.user.email}
        <br />
        <button onClick={() => signOut()}>サインアウト</button>
      </>
    );
  }
  return (
    <>
      ログインする
      <br />
      <button onClick={() => signIn()}>ログイン</button>
    </>
  );
}
