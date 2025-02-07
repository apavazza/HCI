import type React from "react"

interface StatCardProps {
  title: string
  value: string
  icon: React.ReactNode
}

export default function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="text-green-500">{icon}</div>
      </div>
    </div>
  )
}