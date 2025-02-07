"use client"

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
}

const labels = ["Technology", "Travel", "Food", "Lifestyle", "Fashion"]

const data = {
  labels,
  datasets: [
    {
      label: "Number of Posts",
      data: [65, 59, 80, 81, 56],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
}

export default function BarChart() {
  return <Bar options={options} data={data} />
}