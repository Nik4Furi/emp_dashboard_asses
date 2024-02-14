import React from 'react';
import ReactDOM from 'react-dom';
import AgeChart from './AgeChart';

const employeeAges = [50, 30, 20]; // Example data for employee ages in different groups

const EmployeAge = () => (
  <div>
    <AgeChart employeeAges={employeeAges} />
  </div>
);

export default EmployeAge
