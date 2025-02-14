import { Metadata } from "next"
import ExplorePosts from "./_components/explorePosts"

export const metadata: Metadata = {
  title: "Explore",
}

const ExplorePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Explore New Posts</h1>
        <ExplorePosts />
      </div>
    </main>
  )
}

export default ExplorePage

