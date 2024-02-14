import React from 'react';
import SalaryChart from './SalaryChart';

const employeeSalaries = [
  { name: 'Alice', salary: 60000 },
  { name: 'Bob', salary: 75000 },
  { name: 'Charlie', salary: 80000 },
  // Add more employee data as needed
];

const EmployeSalary = ({employe}) => (
  <div>
    <SalaryChart employeeSalaries={employe} />
  </div>
);

export default EmployeSalary;