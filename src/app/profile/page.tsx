import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import type { Metadata } from "next";
import LineChart from "./_components/lineChart";

export const metadata: Metadata = {
  title: "Dashboard",
};
export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center py-14 space-y-14 bg-brand-black">
        <h1 className="text-6xl font-extrabold tracking-tight">Dashboard</h1>
        <p className="text-xl text-center text-brand-text-weak">
          You need to be logged in to view this page. Please sign in to
          continue.
        </p>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <h1 className="text-3xl font-extrabold tracking-tight">
        Welcome{" "}
        <span className="text-brand-primary">{session.user.name}</span>
        <div className="w-full">
          <LineChart></LineChart>
        </div>
      </h1>
    </main>
  );
}