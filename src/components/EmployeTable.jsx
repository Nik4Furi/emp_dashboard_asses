import React from 'react';
import '../EmployeTable.scss';

const EmployeeTable = ({ employees, onDelete }) => {
    
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.employee_name}</td>
            <td>{employee.employee_salary}</td>
            <td>
              <button onClick={() => onDelete(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
