import Link from "next/link"

const recentPosts = [
  { id: 1, title: "Getting Started with React", date: "2023-06-15", views: 1234 },
  { id: 2, title: "Advanced TypeScript Techniques", date: "2023-06-10", views: 987 },
  { id: 3, title: "Building Responsive Layouts with Tailwind CSS", date: "2023-06-05", views: 2345 },
  { id: 4, title: "Introduction to Next.js 13", date: "2023-05-30", views: 3456 },
  { id: 5, title: "State Management with Redux Toolkit", date: "2023-05-25", views: 876 },
]

export default function RecentPosts() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {recentPosts.map((post) => (
            <tr key={post.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={''} className="text-sm font-medium text-green-600 hover:text-green-900">
                  {post.title}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}