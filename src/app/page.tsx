"use client";

import { UserStoreTypes, useUserStore } from "@/stores/userStore";

export default function Home() {
  const { user } = useUserStore<UserStoreTypes>((state) => state);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      Home page
      {user ? <div>Hello {user.userName}</div> : null}
    </main>
  );
}
