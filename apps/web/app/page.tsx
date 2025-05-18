import { prismaClient } from "@repo/db/client";

export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div>
      Shreyansh Shukla
      <div>{user?.email}</div>
      <div>{user?.password}</div>
    </div>
  );
}
