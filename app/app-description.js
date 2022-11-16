import { unstable_getServerSession } from "next-auth/next";

export default async function AppDescription() {
  const session = await unstable_getServerSession();
  console.log({ session });

  return (
    <div>
      <div>App Description (server component)</div>
      <div>You are {/*session.user.name*/}</div>
    </div>
  );
}
