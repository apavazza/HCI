"use client";

import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { max } from 'drizzle-orm';

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Data for the line chart (an increasing trend)
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
    datasets: [
      {
        label: 'Increasing Trend',
        data: [10, 20, 31, 42, 56, 60], // Y-axis values (increasing trend)
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  // Options for the line chart
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable aspect ratio to allow the chart to fill the container's height
    plugins: {
      title: {
        display: true,
        text: 'Subscription Trend',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Subscriptions',
        },
        min: 0, // Minimum value for the Y-axis
        max: 100, // Maximum value for the Y-axis (adjust as needed)
      },
    },
  };

  return (
    <div style={{ height: '500px', width: '100%' }}> {/* Ensure the container has enough height */}
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
