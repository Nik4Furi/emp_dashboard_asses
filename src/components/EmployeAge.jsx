import React from 'react';
import ReactDOM from 'react-dom';
import AgeChart from './AgeChart';
// Example data for employee ages in different groups

const EmployeAge = ({employeeAges}) => (
  <div>
    <AgeChart employeeAges={employeeAges} />
  </div>
);

export default EmployeAge
