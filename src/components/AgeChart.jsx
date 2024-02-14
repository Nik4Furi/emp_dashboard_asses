import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const AgeChart = ({ employeeAges }) => {
  const data = {
    labels: ['18-30', '31-45', '45-100'],
    datasets: [
      {
        label: 'Age Groups',
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
        data: employeeAges,
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default AgeChart;
