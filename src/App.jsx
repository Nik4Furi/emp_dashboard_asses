
import './App.scss'

import React, { useState } from 'react'

import EmployeAge from "./components/EmployeAge"
import EmployeSalary from "./components/EmployeSalary"


import { Chart as ChartJS, BarElement, Tooltip, Legend, LinearScale, CategoryScale, ArcElement } from 'chart.js'
import EmployeeTable from './components/EmployeTable'

ChartJS.register(
  BarElement, Tooltip, Legend, LinearScale, CategoryScale, ArcElement
)

function App() {

  const [employees, setEmployees] = useState([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ]);

  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <>
      <main className="container">

        <div>
          <h1><span className="text-highlight m-3">Dashboard</span>: Get Your Empolyes Details</h1>
          <p>This dashboard is helping you, to getting the employes information in visualize form. And also can process your exception, and match the future prediction results</p>
        </div>

        {/* barchart: to visulize the employe salaries  */}
        <section id="EmploySalary">

          <EmployeSalary />
        </section>

        {/* Section to showing the table data, and age chart  */}
        <section className="flex" id="table-doughnut">

          {/* Section for the table  */}
          <section id="table-data" style={{ border: "2px solid salmon", borderRadius: '12px', padding: '5px', minWidth: '50%',margin:"5px" }}>
            <h2 style={{ textAlign: "center", margin: "5px" }}>Employee List</h2>
            <EmployeeTable employees={employees} onDelete={handleDelete} />
          </section>

          {/* Next line and at end, showing Doughnut chart  */}
          <section id="EmployeAge" style={{ minWidth: '50%' }}>
            <h2 style={{ textAlign: "center", margin: "5px" }}>Employee Age Groups</h2>
            <EmployeAge />
          </section>
        </section>

      </main>
    </>
  )
}

export default App
