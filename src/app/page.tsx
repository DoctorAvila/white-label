import prisma from "@/infra/db";
import { Suspense } from "react";

async function getAllUsers() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return prisma.user.findMany();
}

async function Users() {
  const users = await getAllUsers();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>
    </div>
  );
}
