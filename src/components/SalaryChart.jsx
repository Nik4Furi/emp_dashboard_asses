import React from 'react';
import { Bar } from 'react-chartjs-2';

const SalaryChart = ({ employeeSalaries }) => {
  const data = {
    labels: employeeSalaries.map((employee) => employee.name),
    datasets: [
      {
        label: 'Salary',
        backgroundColor:'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: employeeSalaries.map((employee) => employee.salary),
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        options={{
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
      />
    </div>
  );
};

export default SalaryChart;
