import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import type { Metadata } from "next"
import Link from "next/link"
import LineChart from "./_components/lineChart"
import BarChart from "./_components/barChart"
import StatCard from "./_components/statCard"
import RecentPosts from "./_components/recentPosts"
import { User, BarChart2, TrendingUp, Users } from "lucide-react"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: headers(),
  })

  if (!session) {
    redirect("/signin")
    return (
      <main className="flex min-h-screen flex-col items-center justify-center py-14 space-y-8 bg-gray-50">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Dashboard</h1>
        <p className="text-xl text-center text-gray-600 max-w-md">
          You need to be logged in to view this page. Please sign in to continue.
        </p>
        <Link
          href="/signin"
          className="px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-150 ease-in-out"
        >
          Sign In
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Welcome, <span className="text-green-600">{session.user.name}</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Posts" value="156" icon={<BarChart2 className="h-6 w-6" />} />
          <StatCard title="New Followers" value="23" icon={<Users className="h-6 w-6" />} />
          <StatCard title="Views This Week" value="1,203" icon={<User className="h-6 w-6" />} />
          <StatCard title="Engagement Rate" value="8.7%" icon={<TrendingUp className="h-6 w-6" />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Post Views Over Time</h2>
            <LineChart />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Top Categories</h2>
            <BarChart />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <RecentPosts />
        </div>
      </div>
    </main>
  )
}

